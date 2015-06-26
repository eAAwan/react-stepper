/* jshint globalstrict: true */
'use strict';

var React           = require('react');
var Stepper         = require('./stepper');
var _               = require('lodash');

var StepperContainer = React.createClass({

    displayName : 'StepperContainer',

    propTypes: {
        currentStep    : React.PropTypes.string.isRequired,
        onClick        : React.PropTypes.func.isRequired,
        onChange       : React.PropTypes.func.isRequired,
        options        : React.PropTypes.object.isRequired,
        selectedOption : React.PropTypes.string.isRequired
    },

    getOptionsForStepper() {
        var options   = [],
            component = this;

        _.each(this.props.options, function (option, key) {
            options[option.order] = {
                key     : key,
                name    : option.name,
                current : key === component.props.currentStep
            };
        });

        return options;
    },

    getOptionsForSmallStepper() {
        var options   = {};

        _.each(this.props.options, function (option, key) {
            options[key] = option.name;
        });

        return options;
    },

    render() {

        return (
            <div className = 'stepper-container'>
                <Stepper
                    options = {this.getOptionsForStepper()}
                    onClick = {this.props.onClick}
                />
            </div>
        );
    }
});

module.exports = StepperContainer;
