"use strict";
const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log("Welcome to the UXLAND lit component generator");

    const prompts = [
      {
        type: "input",
        name: "moduleName",
        message: "What is the component name ?",
        default: "lit-component-name"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("components/my-component/my-component.ts"),
      this.destinationPath(this.props.moduleName + "/" + this.props.moduleName + ".ts"),
      {
        moduleId: this.props.moduleName,
        camelCase: this.props.moduleName.charAt(0).toUpperCase() + this.props.moduleName.slice(1).replace(/\W+(.)/g, function (
          match,
          chr
        ) {
          return chr.toUpperCase();
        })
      }
    );
    this.fs.copyTpl(
      this.templatePath("components/my-component/template.ts"),
      this.destinationPath(this.props.moduleName + "/" + "template.ts"), 
      {
        moduleId: this.props.moduleName,
        camelCase: this.props.moduleName.charAt(0).toUpperCase() + this.props.moduleName.slice(1).replace(/\W+(.)/g, function (
          match,
          chr
        ) {
          return chr.toUpperCase();
        })
      }
    );
    this.fs.copy(
      this.templatePath("components/my-component/styles.scss"),
      this.destinationPath(this.props.moduleName + "/" + "styles.scss")
    );
    this.fs.copy(
      this.templatePath("components/my-component/styles.scss.d.ts"),
      this.destinationPath(this.props.moduleName + "/" + "styles.scss.d.ts")
    );
  }
};
