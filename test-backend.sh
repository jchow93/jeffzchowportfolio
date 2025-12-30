#!/bin/bash

# Quick test script for the Google Apps Script backend
# This helps verify your backend is working before testing the full app

# Get backend URL from environment variable or use placeholder
BACKEND_URL="${NEXT_PUBLIC_BACKEND_URL:-https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec}"

if [[ "$BACKEND_URL" == *"YOUR_SCRIPT_ID"* ]]; then
  echo "❌ ERROR: Backend URL not configured!"
  echo "   Set NEXT_PUBLIC_BACKEND_URL environment variable:"
  echo "   export NEXT_PUBLIC_BACKEND_URL='https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'"
  exit 1
fi

echo "🧪 Testing Google Apps Script Backend..."
echo ""

# Test 1: Personalized visit
echo "Test 1: Sending personalized visit data..."
RESPONSE1=$(curl -X POST "$BACKEND_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "jobTitle": "Product Manager",
    "source": "linkedin"
  }' \
  -w "\nHTTP_STATUS:%{http_code}" \
  -s \
  -L)

# Extract and display response
HTTP_STATUS1=$(echo "$RESPONSE1" | grep -o "HTTP_STATUS:[0-9]*" | cut -d: -f2)
BODY1=$(echo "$RESPONSE1" | sed 's/HTTP_STATUS:[0-9]*$//')

echo "$BODY1"
echo ""
if echo "$BODY1" | grep -q "DOCTYPE html"; then
  echo "❌ ERROR: Received HTML error page (script is broken)"
  echo "   Fix: Update your Apps Script code (see QUICK-FIX-STEPS.md)"
elif echo "$BODY1" | grep -q '"success"'; then
  echo "✅ SUCCESS: Received JSON response (script is working!)"
else
  echo "⚠️  WARNING: Unexpected response format"
fi
echo "HTTP Status: $HTTP_STATUS1"

echo ""
echo "---"
echo ""

# Test 2: Skipped visit
echo "Test 2: Sending skipped visit data..."
RESPONSE2=$(curl -X POST "$BACKEND_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "",
    "jobTitle": "Generalist",
    "source": "resume"
  }' \
  -w "\nHTTP_STATUS:%{http_code}" \
  -s \
  -L)

# Extract and display response
HTTP_STATUS2=$(echo "$RESPONSE2" | grep -o "HTTP_STATUS:[0-9]*" | cut -d: -f2)
BODY2=$(echo "$RESPONSE2" | sed 's/HTTP_STATUS:[0-9]*$//')

echo "$BODY2"
echo ""
if echo "$BODY2" | grep -q "DOCTYPE html"; then
  echo "❌ ERROR: Received HTML error page (script is broken)"
  echo "   Fix: Update your Apps Script code (see QUICK-FIX-STEPS.md)"
elif echo "$BODY2" | grep -q '"success"'; then
  echo "✅ SUCCESS: Received JSON response (script is working!)"
else
  echo "⚠️  WARNING: Unexpected response format"
fi
echo "HTTP Status: $HTTP_STATUS2"

echo ""
echo "✅ Tests complete!"
echo ""
echo "📊 Check your Google Sheet to verify the data was received."
echo "   Expected: 2 new rows should appear with the test data."

