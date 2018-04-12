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
        
        // map the top rated recordings
        let topRated = data.discography.topRated;
        var topRatedAlbums = _.map(topRated, function(recording) {
            // console.log(recording);
            return recording;
        });
        
//_________________________________________________

//   ($('#list-top-rated > li.top-rated').length) = 0 ???? should = 5

// display the albums as a list
        // make a function that creates a jQuery list item element
        const $topRecordings = topRatedAlbums.map(function(album){
            // turn album.title = Eastern Rebellion into eastern-rebellion.jpg
            let albumTitle = album.title;
            let albumTitleDashed = albumTitle.toLowerCase().replace(/ /gi, "-")
            .replace(/\'/gi, "");
            // make a jQuery list item element with class = 'recording'
            let $listItem = $(`<li class="recording top-rated" id=${albumTitleDashed}>`)
                .on('click', function(event){
                    //  debugger;
                    // expect($('#section-top-rated img').length).to.equal(1);
                $topRatedImage.attr(`src`, `images/album/${albumTitleDashed}.jpg`);
                // $topRatedImage.attr(`img id`, albumTitleDashed);
            });
            for (var key in album) {
                // create jQuery <div> element, add class = key to each <div>, add text with key: value
                const $element = $('<div>').addClass(key).text(`${key}: ${album[key]}`);
                // add the element to the end of the $listItem
                $listItem.append($element);
            }
            return $listItem;
        });
        $('#list-top-rated').append($topRecordings);

//_________________________________________________
        // display the topRatedAlbums as a list
        // topRatedAlbums.forEach(function(album){
        //     $('#list-top-rated').append($('<li>' + 'title: '  + album.title + '<br />' 
        //     + ' artist: ' + album.artist + '<br />' 
        //     + ' release:<i> ' + album.release + '<br />'
        //     + ' year:<i> ' + album.year + '<br />' + '</li>').addClass("recordings"));
        // });
//_________________________________________________
        
        // example of adding "Billy's Rider" to the page
        // make a <section> called 'section' with id = 'section-rider'
        // let $section = $('<section>').attr('id', 'section-rider');
        // insert <h3> at the end of "section" and insert text at the end of id="sections"
        // $section.append($('<h3>').text('Billy\'s Rider')).appendTo($('#sections'));
        
        // make a <section> called 'recordingSection' with id = 'section-recordings'
        let $recordingSection = $('<section>').attr('id', 'section-recordings')
        .append($('<header id="header-recordings" class="header-recordings">Recordings</header>'));
        //<header id="header-top-rated" class="header-recordings">Top Rated</header>
        $recordingSection.append($('<ul id="list-recordings" class="list-recordings">')).appendTo($('#section-top-rated'));

        // map the recordings
        let recordings = data.discography.recordings;
        var albums = _.map(recordings, function(record) {
            // console.log(record);
            return record;
        });
        
        // display the albums as a list
        // make a function that creates a jQuery list item element
        const $recordings = albums.map(function(album){
            // turn album.title = Eastern Rebellion into eastern-rebellion.jpg
            let albumTitle = album.title;
            let albumTitleDashed = albumTitle.toLowerCase().replace(/ /gi, "-")
            .replace(/\'/gi, "");
            // make a jQuery list item element with class = 'recording'
            let $listItem = $(`<li class = "recording" id=${albumTitleDashed}>`)
                .on('click', function(event){
                // console.log($(event.currentTarget));
                $recordingImage.attr(`src`, `images/album/${albumTitleDashed}.jpg`);
            });
            for (var key in album) {
                // create jQuery <div> element, add class = key to each <div>, add text with key: value
                const $element = $('<div>').addClass(key).text(`${key}: ${album[key]}`);
                // add the element to the end of the $listItem
                $listItem.append($element);
            }
            return $listItem;
        });
        $('#list-recordings').append($recordings);

    // add an image to the top of the sections for top rated and recordings
    
    // add image to top of top-rated section
    const $topRatedImageDiv = $('<div id="image-container-top-rated">').addClass("image-container");
    const $topRatedImage = $('<img id="top-rated-image" src="images/album/voice-in-the-night.jpg" class="image">');
    $topRatedImageDiv.append($topRatedImage);
    $('#section-top-rated').prepend($topRatedImageDiv.append($topRatedImage));
    
    // add image to top of recording section
    const $recordingImageDiv = $('<div id="image-container-recording">').addClass("image-container");
    const $recordingImage = $('<img id="recording-image" src="images/album/eastern-rebellion.jpg" class="image">');
    $recordingImageDiv.append($recordingImage);
    $('#section-recordings').prepend($recordingImageDiv.append($recordingImage));
    
    
    
    // add a click handler to detect user clicks on image of Billy
    // swap out image from data.images.billy
    var i = 0;
    const clickHandler = function(event) {
        // console.log('clicked');
        i++;
        if (i === 4) i = 0;
// ????????????????????????????????????????????????????????????????????????????        
        // make image fade in? doesn't work...
        $('#image-billy').attr(`src`, `images/billy/billy-${i}.jpg`).fadeIn(3000);
    };
    $('#image-container-billy').on('click', clickHandler);
    
    // Billy's Rider
    let $rider = $('<section>').attr('id', 'section-rider');
    $rider.append($('<h3>').text('Billy\'s Rider'))
    .appendTo($('#sections'));
    
    var createTable = function(gear){
        var createRow = function(item){
            var $row = $("<tr>");
            var $drum = $("<td>").text(item.drum);
            var $brand = $("<td>").text(item.brand);
            $row.append($drum);
            $row.append($brand);
            return $row;
        }
        var $table = $("<table>");
        var $rows = gear.map(createRow);
        $table.append($rows);
        return $table;
    };
    let gear = [{drum: "Kick Drum", brand: "Tama"}, {drum: "Hi Hats", brand: "Paiste"},
    {drum: "Snare", brand: "Tama"}, {drum: "Crash", brand: "Paiste"},
    {drum: "High Tom", brand: "Tama"}, {drum: "Ride", brand: "Paiste"},
    {drum: "Mid Tom", brand: "Tama"}, {drum: "Splash", brand: "Paiste"},
    {drum: "Floor Tom", brand: "Tama"}, {drum: "Wood Block", brand: "Remo"},
    {drum: "Timpani", brand: "Tama"}, {drum: "Gong", brand: "Paiste"},
    {drum: "Throne", brand: "Tama"}, {drum: "Chimes", brand: "Paiste"},];
    createTable(gear).appendTo($('#section-rider'));
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});
