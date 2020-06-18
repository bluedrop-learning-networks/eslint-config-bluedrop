#!/usr/bin/env bash

set -euo pipefail

echo "This utility will automatically install the required plugins and dependencies needed for linting."

base_packages="eslint@7 eslint-plugin-filenames@1 eslint-plugin-promise@4 eslint-plugin-security@1 eslint-plugin-eslint-comments@3 eslint-plugin-import@2 eslint-plugin-unicorn@20"
babel_packages="eslint-plugin-babel@5"
chai_packages="eslint-plugin-chai-expect@2"
console_packages=""
mocha_packages="eslint-plugin-mocha@7"
node_packages="eslint-plugin-node@11"
react_packages="eslint-plugin-node@11 eslint-plugin-jsx-a11y@6 eslint-plugin-react@7 eslint-plugin-react-hooks@4"

babel_enabled=0
chai_enabled=0
console_enabled=0
mocha_enabled=0
node_enabled=0
react_enabled=0

error_message=""

print_options() {
	local babel=""
	local chai=""
	local console=""
	local mocha=""
	local node=""
	local react=""

	if [[  "$babel_enabled" == "1" ]]; then
		babel=" (enabled)"
	fi
	if [[  "$chai_enabled" == "1" ]]; then
		chai=" (enabled)"
	fi
	if [[  "$console_enabled" == "1" ]]; then
		console=" (enabled)"
	fi
	if [[  "$mocha_enabled" == "1" ]]; then
		mocha=" (enabled)"
	fi
	if [[  "$node_enabled" == "1" ]]; then
		node=" (enabled)"
	fi
	if [[  "$react_enabled" == "1" ]]; then
		react=" (enabled)"
	fi
	echo "――――――――――"
	echo "1) Babel$babel"
	echo "2) Chai$chai"
	echo "3) Console$console"
	echo "4) Mocha$mocha"
	echo "5) Node$node"
	echo "6) React$react"
	echo "――――――――――"
	echo "Q) Finish"
	echo "F) Finish"
	echo "――――――――――"
	if [[ "$error_message" != "" ]]; then
		echo "$error_message"
	fi
}

clear_prompt() {
	if [[ "$error_message" != "" ]]; then
		printf "\033[2K" # clear current line
		printf "\033[1A" # move up a line
	fi
	for (( c=0; c<=11; c++ )); do
		printf "\033[2K" # clear current line
		printf "\033[1A" # move up a line
	done
	printf "\033[2K" # clear current line
}

while true; do
	print_options
	read -r -p "Selection: " userinput

	clear_prompt
	error_message=""
	case "$userinput" in
		1)
			if [[  "$babel_enabled" == "1" ]]; then
				babel_enabled=0
			else
				babel_enabled=1
			fi
			;;
		2)
			if [[  "$chai_enabled" == "1" ]]; then
				chai_enabled=0
			else
				chai_enabled=1
			fi
			;;
		3)
			if [[  "$console_enabled" == "1" ]]; then
				console_enabled=0
			else
				console_enabled=1
			fi
			;;
		4)
			if [[  "$mocha_enabled" == "1" ]]; then
				mocha_enabled=0
			else
				mocha_enabled=1
			fi
			;;
		5)
			if [[  "$node_enabled" == "1" ]]; then
				node_enabled=0
			else
				node_enabled=1
			fi
			;;
		6)
			if [[  "$react_enabled" == "1" ]]; then
				react_enabled=0
			else
				react_enabled=1
			fi
			;;
		F|f)
			break 2
			;;
		Q|q)
			echo "Exiting without installing any dependencies"
			exit 1
			;;
		*)
			error_message="Invalid selection"
			;;
	esac
done

echo ""

packages_to_install="$base_packages"
if [[  "$babel_enabled" == "1" ]]; then
	packages_to_install="$packages_to_install $babel_packages"
fi
if [[  "$chai_enabled" == "1" ]]; then
	packages_to_install="$packages_to_install $chai_packages"
fi
if [[  "$console_enabled" == "1" ]]; then
	packages_to_install="$packages_to_install $console_packages"
fi
if [[  "$mocha_enabled" == "1" ]]; then
	packages_to_install="$packages_to_install $mocha_packages"
fi
if [[  "$node_enabled" == "1" ]]; then
	packages_to_install="$packages_to_install $node_packages"
fi
if [[  "$react_enabled" == "1" ]]; then
	packages_to_install="$packages_to_install $react_packages"
fi
echo "Running: npm install --save-dev ${packages_to_install}"

# shellcheck disable=SC2086
npm install --save-dev ${packages_to_install}
