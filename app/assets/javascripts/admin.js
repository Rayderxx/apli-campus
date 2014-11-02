$( document ).ready(function() {
    $(".present").click(function(){
        var state = false;
        var self = $(this)
        if(self.html() == "Présent") {
            state = true;
        }

        $.ajax({
            url : '/admin/admin/presence',
            type : 'POST',
            data : 'state=' + state+ '&id=' + $(this).attr('data-id')+ '&event='+$(this).attr('data-event') ,
            success : function(response, statut){ // code_html contient le HTML renvoyé
                if(state == false) {
                    self.html("Présent")
                }else{
                    self.html("Absent")
                }
            }
        });
    });
});