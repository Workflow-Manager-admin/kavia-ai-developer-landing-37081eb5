#!/bin/bash
cd /home/kavia/workspace/code-generation/kavia-ai-developer-landing-37081eb5/landing_page_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

