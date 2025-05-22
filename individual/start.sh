#!/usr/bin/env -S guix shell python -- bash

cd src
python3 -m http.server 8080
