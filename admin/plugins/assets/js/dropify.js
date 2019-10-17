/**
 * Theme: Hyrax UX Admin Template
 * Author: SRGIT
 * Drop file upload
 */


$(document).ready(function() {
	
	"use strict";
        // Basic
        $('.dropify').dropify();

        // Translated
        $('.dropify-fr').dropify({
            messages: {
                default: 'Neque porro quisquam est qui',
                replace: 'quia dolor sit amet, consectetur, adipisci velit',
                remove: 'Remove File',
                error: 'Error, Something went wrong!'
            }
        });

        // Used events
        var drEvent = $('#input-file-events').dropify();

        drEvent.on('dropify.beforeClear', function(event, element) {
            return confirm("Are yousure about your idea of deleting it \"" + element.file.name + "\" ?");
        });

        drEvent.on('dropify.afterClear', function(event, element) {
            alert('File vanished');
        });

        drEvent.on('dropify.errors', function(event, element) {
            console.log('File Has Errors');
        });

        var drDestroy = $('#input-file-to-destroy').dropify();
        drDestroy = drDestroy.data('dropify')
        $('#toggleDropify').on('click', function(e) {
            e.preventDefault();
            if (drDestroy.isDropified()) {
                drDestroy.destroy();
            } else {
                drDestroy.init();
            }
        })
    });