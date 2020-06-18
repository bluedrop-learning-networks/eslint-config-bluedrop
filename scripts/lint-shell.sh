#!/usr/bin/env sh

if command -v shellcheck >/dev/null 2>&1; then
	echo "Running ShellCheck on scripts/"
	shellcheck \
		./bin/*.sh \
		./scripts/*.sh
else
	echo "shellcheck not found; skipping lint"
fi
