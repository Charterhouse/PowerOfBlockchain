#!/bin/bash
ROOT=`dirname "${0}"`
git apply "$ROOT/0001-After-submitting-new-question-show-page-for-that-que.patch"
git apply "$ROOT/0002-Add-an-answer-for-a-question.patch"
