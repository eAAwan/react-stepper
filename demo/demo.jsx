'use strict';

var React   = require('react');
var _       = require('lodash');
var Stepper = require('../src/stepper-container');

require('./demo.scss');

var StepperDemo = React.createClass({

    displayName : 'StepperDemo',

    getInitialState() {
        return {
           currentStep : 1
        };
    },

    onStepperClick(step)
    {
        this.setState({
           currentStep : step
        });

    },

    render()
    {
        var options = {
                personal : 'Personal Information',
                address  : 'Address',
                contact  : 'Contact Info',
                review   : 'Review',
                summary  : 'Summary'
            };

        var key = 1;

        var steps = _.map(options, function(option, index){

            var step = {
                    title : option,
                    key   : key
                };

            key +=1;

            return step;

        });

        return (
            <div className='demo__wrapper'>
                <h1 className='h1 text-center'>React Stepper</h1>
                <p className='p text-center'>A lightweight stepper navigation component built by Synapse Studios.</p>
                <p className='p text-center'>View this project on <a href='https://github.com/synapsestudios/react-stepper'>Github</a></p>
                <Stepper
                    currentStep    = {this.state.currentStep}
                    onClick        = {this.onStepperClick}
                    onChange       = {this.onStepperClick}
                    steps          = {steps}
                    options        = {options}
                    selectedOption = {'this.state.currentStep.toSting()'}
                />
            </div>
        );
    }

});

module.exports = StepperDemo;
