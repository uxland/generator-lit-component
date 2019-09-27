# Lit Component Generator [![npm version](https://badge.fury.io/js/%40uxland%2Fgenerator-lit-component.svg)](https://badge.fury.io/js/%40uxland%2Fgenerator-lit-component)

| Build Status                                                                                                                          | Statements                                    | Branches                                  | Functions                                   | Lines                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ----------------------------------------- | ------------------------------------------- | ----------------------------------- |
| [![Build Status](https://api.travis-ci.org/uxland/generator-lit-element.svg)](https://api.travis-ci.org/uxland/generator-lit-element) | ![Statements](#statements# 'Make me better!') | ![Branches](#branches# 'Make me better!') | ![Functions](#functions# 'Make me better!') | ![Lines](#lines# 'Make me better!') |

Create Lit Components on the fly

## Installation

`npm i @uxland/generator-lit-element`

## Usage

A serializer is composed by:

- `from`: property of input object to serialize
- `to` (optional): destination property to which input object property defined in `from` will be serialized
- `serializerFn` (optional): serialization function used to serialize input following `output[to] = serializerFn(input[from])`
- `deserializerFn` (optional): deserialization function used to deserialize output following `input[from] = deserializerFn(output[to])`

### Object serialization

`from` and `to` properties can be a property name or a path.

```
const input = {foo: 'bar'};
const serializers = [{from: 'foo', to: 'FOO'}];
serialize(input, serializers); // {FOO: 'bar'};
```

```
const input = {foo: {baz: 'bar'}};
const serializers = [{from: 'foo.baz', to: 'FOO'}];
serialize(input, serializers); // {FOO: 'bar'};
```

`to` property is optional. When not provided, destination property will be the same as the origin:

```
const input = {foo: 'bar', qux: 'quz'};
const serializers = [{from: 'foo', to: 'FOO'}, {from: 'qux'}];
serialize(input, serializers); // {FOO: 'bar', qux: 'quz'}
```

### Changing data

`serializerFn` is used to change input data

```
const input = {foo: 'bar'};
const serializers = [{from: 'foo', serializerFn: value => value.toUpperCase()}];
serialize(input, serializers); // {foo: 'BAR'};
```

### Multidestination serialization

`to` property can be used to map input data into multiple output properties

```
const input = {foo: 'bar'};
const serializers = [{from: 'foo', to: ['baz', 'qux']}];
serialize(input, serializers); // {baz: 'bar', qux: 'bar'};
```

### Multiorigin serialization

When defining `from` as a property array, and `to` as a single property, a `serializerFn` must be provided in order to merge input data into a single output

```
const input = {name: 'foo', surname: 'bar'};
const serializers = [{from: ['name', 'surname'], to: 'fullname', serializerFn: (name, surname) => `${name} ${surname}`}];
serialize(input, serializers); // {fullname: 'foo bar'};
```

### Sub-serialization

Due to its recursive capability, it is possible to define serializers within serializers in order to serialize nested objects

```
const input = {foo: [{qux: 'quz', bar: 'baz'}]};
const serializers = [{from: 'foo', to: 'FOO', serializers: [{from: 'qux', to: 'QUX'}, {from: 'bar', to: 'BAR'}]}];
serialize(input, serializers); // {FOO: [{QUX: 'quz', BAR: 'baz'}]};
```

```
const input = {foo: {qux: 'quz', bar: 'baz'}};
const serializers = [{from: 'foo', to: 'FOO', serializers: [{from: 'qux', to: 'QUX'}, {from: 'bar', to: 'BAR'}]}];
serialize(input, serializers); // {FOO: {QUX: 'quz', BAR: 'baz'}};
```

### Deserialization

It is possible to use the same serializers array to deserialize output. There are some exceptions that are listed in [TIC](#tic).

```
const input = {name: 'foo', surname: 'bar'};
const serializers = [{from: ['name', 'surname'], to: 'fullname', serializerFn: (name, surname) => `${name} ${surname}`, deserializerFn: (fullname) => fullname.split(' ')}];
const output = serialize(input, serializers); // {fullname: 'foo bar'};
deserialize(output, serializers); // {name: 'foo', surname: 'bar'}
```

## TIC

One premise **must be followed** when using the same serializers array for `serialize` and `deserialize`: you cannot change `serialize` object result structure if `deserialization` is going to be used.

Also, be aware that changing input structure with `serialize` can cause inconsistencies and deserialization could be impossible since serializerFn and deserializerFn cannot access parent data information

### Working example

```
const input = {foo: {baz: 'bar'}};
const serializers = [{from: 'foo.baz', to: 'baz'}];
const output = serialize(input, serializers); // {baz: 'bar'};
deserialize(output, serializers); // {foo: {baz: 'bar'}};
```

### Serialization broken

```
const input = {foo: 'bar'};
const serializers = [{from: 'foo', serializers: [{from: 'bar'}]}];
const output = serialize(input, serializers); // {foo: {bar: undefined}};
// This cannot be deserialized
```
