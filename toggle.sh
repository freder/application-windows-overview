#!/bin/bash

# TODO: find a nicer way to to this:
gnome-extensions enable application-windows-overview@github.freder
dbus-send --session --type=method_call --dest=org.gnome.Shell /org/gnome/Shell org.gnome.Shell.Eval string:'Main.overview.toggle();'
gnome-extensions disable application-windows-overview@github.freder
