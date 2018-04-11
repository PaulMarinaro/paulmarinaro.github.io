/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        $('#section-bio p:last-child').remove();
        
        $('#section-quotes').css('background-color', 'white').css('border-radius', '20px');
        
        $('.quote').css('color', 'black').css('font-style', 'italic');
        
        $('#quotes').css('padding-right', '10px').css('padding-left', '10px')
        .css('padding-top', '10px').css('padding-bottom', '10px');
        
        $('#quotes:last-child').css('padding-bottom', '4px');
        
        $('#section-quotes').css('text-align', 'center').css('font-size', '17px');
        
        $('#section-quotes').prependTo('#sections');
        
        // take out japan quote
        $('#quotes p:first-child').remove();
        
        // change background to black
        $('body').css('background-color', 'black');
        
        // remove class="heading heading-quotes">Quotes by Billy Higgins
        $('.heading-quotes').remove();
        

        //un-comment this to inspect all available data; delete when done //

        //EXAMPLE: Looping over top rated recordings; replace with your code //
        // let topRated = data.discography.topRated;
        // _.forEach(topRated, function(recording) {
        //     console.log(recording);
        // });
        
        
        // The append() method inserts specified content at the end of the selected elements.
        // $(selector).append(content,function(index,html))
        
        // The appendTo() method inserts HTML elements at the end of the selected elements.
        // $(content).appendTo(selector)
        
        // The text() method sets or returns the text content of the selected elements.
        // Set text content: $(selector).text(content)
        // Set text content using a function:
        // $(selector).text(function(index,currentcontent))
        
        // The attr() method sets or returns attributes and values of the selected elements.
        // Set multiple attributes and values:
        //$(selector).attr({attribute:value, attribute:value,...}) 
        
        // map the top rated recordings
        let topRated = data.discography.topRated;
        var topRatedAlbums = _.map(topRated, function(recording) {
            // console.log(recording);
            return recording;
        });
        // display the topRatedAlbums as a list
        topRatedAlbums.forEach(function(album){
            $('#list-top-rated').append($('<li>' + '<i>title: </i>'  + album.title + '<br />' 
            + ' <i>artist:<i> ' + album.artist + '<br />' 
            + ' <i>release:<i> ' + album.release + '<br />'
            + ' <i>year:<i> ' + album.year + '<br />' + '</li>'));
        });
        
        // example of adding "Billy's Rider" to the page
        // make a <section> called 'section' with id = 'section-rider'
        // let $section = $('<section>').attr('id', 'section-rider');
        // insert <h3> at the end of "section" and insert text at the end of id="sections"
        // $section.append($('<h3>').text('Billy\'s Rider')).appendTo($('#sections'));
        
        // make a <section> called 'section' with id = 'section-rider'
        let $recordingSection = $('<section>').attr('id', 'section-recordings');
        // $recordings.append($('<ul>').text('Billy\'s Rider')).appendTo($('#list-top-rated'));
        $recordingSection.append($('<ul id="list-recordings" class="list-recordings">')).appendTo($('#list-top-rated'));

        // map the recordings
        let recordings = data.discography.recordings;
        var albums = _.map(recordings, function(record) {
            // console.log(record);
            return record;
        });
        
        // <li class="recording">
        // display the albums as a list
        const $recordings = albums.map(function(album){
            // console.log(album, 'album');
            $('#list-recordings').append($('<li class = "recording" >'));
            for (var key in album) {
                // console.log(key, 'key');
                // debugger;
                // problem: it's appending for every element with a class = "recording"
                return $('#list-recordings').append($('<div class = "key" + >' + key + ": "  
                + album[key] + '</div>'));
            }
        });

    // create function
    // let $createRecording = function(album) {
    //     // create template
    //     // make a jQuery element that has this structure:
    //     //<li class="recording">
    //     let $listItem = $('<li class = "recording" >');
    //         // <div class="title">Title: Eastern Rebellion</div>
    //         let $title = $('<div class = "title" + >' + 'title: ' 
    //         + album.title + '</div>');
    //         // <div class="artist">Artist: Cedar Walton</div>
    //         let $artist = $('<div class = "artist" + >' + 'artist: ' 
    //         + album.artist + '</div>');           
    //         // <div class="release">Release: Timeless</div>
    //         let $release = $('<div class = "release" + >' + 'release: ' 
    //         + album.release + '</div>');
    //         // <div class="year">Year: 1976</div>
    //         let $year = $('<div class = "year" + >' + 'year: ' + album.year + '</div>');
    //     //</li>*/
        
    // // return the template 
    //     const $recording = $listItem.append($title).append($artist).append($release)
    //     .append($year);
    //     // const $recording = $title;
    //     return $recording;
    // };
    // albums.forEach(function(album){
    //     console.log($createRecording(album));
    //     return $createRecording(album);
    // });
    
    
    
    

        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});
