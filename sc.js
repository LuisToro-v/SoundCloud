SC.initialize({
    client_id: '1bcb0f88ae9c6fc2d7cade29aec56efb'
});

$(document).ready(function() {
    $("#submit").empty(

        $("#submit").click(function() {
            SC.get(
                '/tracks', {
                    q: $('#search').val()
                },
                function(tracks) {
                    for (var i = 0; i < tracks.length; i++) {
                        var track = tracks[i];
                        console.log(track.title);
                        $("#list").append("<li>" + track.title + "</li>");
                    }
                }
            );
        })

    );
});
