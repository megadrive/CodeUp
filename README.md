# CodeUp

## Install

- Not on npmjs yet.

Clone the repo
```
$ git clone https://github.com/megadrive/CodeUp
$ cd CodeUp
```

Link the binary so you can use it on your system.
```
$ npm link
```

## Usage

### CLI

Always use `-- <yourfile>` if you use flags, just to make sure `CodeUp` operates as expected.

```
$ codeup -- path/to/file
https://hatebi.in/urltoyourfile
```

### Flags

```
-v -- Verbose output
--version -- Version
--transport <transportName> -- use another transport (see lib/transports)
--list -- list available sites
```