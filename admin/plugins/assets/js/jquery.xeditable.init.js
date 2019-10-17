/**
 * Theme: Hyrax UX Admin Template
 * Author: SRGIT
 * X editable
 */

"use strict";
$(function(){

    //modify buttons style
    $.fn.editableform.buttons =
        '<button type="submit" class="btn btn-primary editable-submit btn-sm"><i class="fa fa-check"></i></button>' +
        '<button type="button" class="btn btn-default editable-cancel btn-sm"><i class="fa fa-trash"></i></button>';

    //editables
    $('#username').editable({
        type: 'text',
        pk: 1,
        name: 'username',
        title: 'Enter username'
    });

    $('#firstname').editable({
        validate: function(value) {
            if($.trim(value) == '') return 'This field is required';
        }
    });

    $('#gender').editable({
        prepend: "not selected",
        source: [
            {value: 1, text: 'Male'},
            {value: 2, text: 'Female'}
        ],
        display: function(value, sourceData) {
            var colors = {"": "black", 1: "red", 2: "purple"},
                elem = $.grep(sourceData, function(o){return o.value == value;});

            if(elem.length) {
                $(this).text(elem[0].text).css("color", colors[value]);
            } else {
                $(this).empty();
            }
        }
    });

    

    $('#status').editable();

    $('#dob').editable();

    $('#event').editable({
        placement: 'right',
        combodate: {
            firstItem: 'name'
        }
    });

    $('#comments').editable({
        showbuttons: 'bottom'
    });

    $('#persons').editable({
        pk: 1,
        limit: 3,
        source: [
            {value: 1, text: 'Alex'},
            {value: 2, text: 'Nicole'},
            {value: 3, text: 'Ramsey'},
            {value: 4, text: 'Brian'},
            {value: 5, text: 'Gisele'}
        ]
    });

    $('#tags').editable({
        inputclass: 'input-large',
        select2: {
            tags: ['html', 'javascript', 'css', 'ajax'],
            tokenSeparators: [",", " "]
        }
    });

    //Inline editables
    $('#inline-username').editable({
        type: 'text',
        pk: 1,
        name: 'username',
        title: 'Enter username',
        mode: 'inline'
    });

    $('#inline-firstname').editable({
        validate: function(value) {
            if($.trim(value) == '') return 'This field is required';
        },
        mode: 'inline'
    });

    $('#inline-gender').editable({
        prepend: "not selected",
        mode: 'inline',
        source: [
            {value: 1, text: 'Male'},
            {value: 2, text: 'Female'}
        ],
        display: function(value, sourceData) {
           var colors = {"": "black", 1: "red", 2: "purple"},
                elem = $.grep(sourceData, function(o){return o.value == value;});

            if(elem.length) {
                $(this).text(elem[0].text).css("color", colors[value]);
            } else {
                $(this).empty();
            }
        }
    });



    $('#inline-status').editable({
        mode: 'inline'
    });

    $('#inline-dob').editable({
        mode: 'inline'
    });

    $('#inline-event').editable({
        placement: 'right',
        mode: 'inline',
        combodate: {
            firstItem: 'name'
        }
    });

    $('#inline-comments').editable({
        showbuttons: 'bottom',
        mode: 'inline'
    });

    $('#inline-persons').editable({
        pk: 1,
        limit: 3,
        mode: 'inline',
        source: [
           {value: 1, text: 'Alex'},
            {value: 2, text: 'Nicole'},
            {value: 3, text: 'Ramsey'},
            {value: 4, text: 'Brian'},
            {value: 5, text: 'Gisele'}
        ]
    });

    $('#inline-tags').editable({
        inputclass: 'input-large',
        mode: 'inline',
        select2: {
            tags: ['html', 'javascript', 'css', 'ajax'],
            tokenSeparators: [",", " "]
        }
    });

});