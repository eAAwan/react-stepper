/* jshint globalstrict: true */
'use strict';

var React      = require('react');
var classNames = require('classnames');
var _          = require('lodash');

var Stepper = React.createClass({

    displayName : 'Stepper',

    propTypes: {
        options : React.PropTypes.array.isRequired,
        onClick : React.PropTypes.func.isRequired
    },

    onClick : function(index)
    {
        if (index < this.props.currentStep) {
            this.props.onClick(index);
        }
    },

    renderSteps()
    {
        var steps        = [],
            afterCurrent = false;

        for (var i = 0; i < this.props.options.length; i += 1) {
            var widthClass = 'stepper__item--' + this.props.options.length;
            var classes    = classNames({
                'li'                      : true,
                'stepper__item'           : true,
                'stepper__item--disabled' : afterCurrent,
                'stepper__item--error'    : this.props.options[i].errorStep,
                'stepper__item--current'  : this.props.options[i].current
            });
            classes[widthClass] = true;

            if (this.props.options[i].current === true) {
                afterCurrent = true;
            }

            var step = (
                <li className = {classes} key={'step' + i}>
                    <a className = 'stepper__link'
                        onClick   = {_(this.props.onClick).partial(this.props.options[i].key)}
                    >
                    Option Name
                    </a>
                </li>
            );

            steps.push(step);
        }

        return steps;
    },

    render() {
        return (
            <div className='stepper'>
                <ul className='stepper__list'>
                    {this.renderSteps()}
                </ul>
            </div>
        );

    }

});

module.exports = Stepper;
