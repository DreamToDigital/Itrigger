(function( $ ){
    $.fn.Itrigger = function() {
       var element = $(this);
       if(element.length > 0){
            $(this).each(function(){
                var trigger_name = $(this).attr('data-trigger');
                var target_element = $(this).attr('data-target');
                var action = $(this).attr('data-action');
                var action_array = action.split('.');
                var action_triggr = action_array[0];
                var action_property = action_array[1];
                var node_name = $(this).prop('tageName');
                var class_names = $(this).attr("class").replaceAll(' ','.');
                $(this).on(trigger_name,function(){
                    if(action_property == 'html') {
                        $(target_element).html(element.val());
                    }
    
                    if(action_property == 'click') {
                        $(target_element).trigger('click');
                    }
                })
            });
            // onclick="$('#file-input').click()"
       }
       return this;
    }; 
 })( jQuery );