# Lit Component Generator [![npm version](https://badge.fury.io/js/%40uxland%2Fgenerator-lit-component.svg)](https://badge.fury.io/js/%40uxland%2Fgenerator-lit-component)

| Build Status                                                                                                                          | Statements                                    | Branches                                  | Functions                                   | Lines                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------------------------------------- | ------------------------------------------- | ----------------------------------- |
| [![Build Status](https://api.travis-ci.org/uxland/generator-lit-element.svg)](https://api.travis-ci.org/uxland/generator-lit-element) | ![Statements](#statements# 'Make me better!') | ![Branches](#branches# 'Make me better!') | ![Functions](#functions# 'Make me better!') | ![Lines](#lines# 'Make me better!') |

Create a Typescript Lit Components on the fly

## Prerequisites

Installing Uxland generator lit element previously requires the installation of Yeoman. Yeoman can be installed globally or locally. You can doit with the following command:

`npm i yo`

## Installation

The Uxland generator lit element can be installed globally on your machine or locally in a project.
To install it you can use the following command.

`npm i @uxland/generator-lit-element`

## Usage

To create a lit component you just need to use the following command and follow the next steps

`yo @uxland/lit-component`

You can choose a name & destination directory of the new component. 

## What do you get?

A complete functional typescript lit component with:

* my-component-name.ts
* template.ts
* styles.scss
* styles.scss.d.ts

## Usage generator locally in a project

If you need use the generator locally in a project you only need install `Yeoman` & `@uxland/generator-lit-component` as a dev dependency and add `Yeoman` in scripts in your `package.json` like in the example: 

```
{
    devDependencies: {
        "@uxland/generator-lit-component": "^1.x.x",
        "yo": "^3.x.x"
        ...
    },
    scripts: {
        "yo": "yo",
        "create:component": "yo @uxland/lit-component"
        ...
    }

}
```

Then you can simply use `npm run create:component` to use the generator.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
