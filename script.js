// Add zero before numbers < 10
function minTwoDigits(n) {
  return (n < 10 ? '0' : '') + n;
}

jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        // initialize plyr
        var player = new Plyr('#audio1', {
          volume: 0.5,
          autoplay: true,
          muted: false,
          controls: [
                'play',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume'
            ]
        });
        // initialize playlist and controls
        var index = 0,          /* Choose your radio at start : Index - 1 */
            trackNumber = 0,    /* List numerotation */
            tracks = [{
                "name": "Rire et chanson ",
                "note": "rire et chanson",
                "file": "https://scdn.nrjaudio.fm/adwz2/fr/30401/mp3_128.mp3?origine=fluxradios"
            }, {
                "name": "Fun radio",
                "note": "",
                "file": "http://icecast.funradio.fr/fun-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg"
            }, {
                "name": "nrj club hits ",
                "note": "Hit music only",
                "file": "     https://scdn.nrjaudio.fm/adwz1/fr/31073/mp3_128.mp3?origine=fluxradios&aw_0_1st.station=NRJ-Club-Hits"
            }, {
                "name": "Radio grenouille",
                "note": "Radio & création ",
                "file": "https://live.radiogrenouille.com:8443/live"
            }, {
                "name": "France Info",
                "note": "Actualités & Culture",
                "file": "http://direct.franceinfo.fr/live/franceinfo-midfi.mp3"
            }, {
                "name": "Radio FG",
                "note": "Live / Mixes",
                "file": "http://radiofg.impek.com/fg"
            }, {
                "name": "Radio FG : Club",
                "note": "DJ's Mix",
                "file": "http://radiofg.impek.com/fg6"
            }, {
                "name": "Radio FG : Dance by Hakimakli",
                "note": "Deep & Dance",
                "file": "http://radiofg.impek.com/fgd"
            }, {
                "name": "Radio FG : House Chic",
                "note": "Deep-house & lounge",
                "file": "http://radiofg.impek.com/fgc"
            }, {
                "name": "Radio FG : Non Stop",
                "note": "FG Playlist",
                "file": "http://radiofg.impek.com/fge"
            }, {
                "name": "Radio FG : Starter",
                "note": "Nouveautés électro/house",
                "file": "http://radiofg.impek.com/fgv"
            }, {
                "name": "Radio FG : Underground",
                "note": "Scène underground",
                "file": "http://radiofg.impek.com/ufg"
            }, {
                "name": "NRJ",
                "note": "Musique 'Top 40'",
                "file": "https://scdn.nrjaudio.fm/adwz2/fr/30001/mp3_128.mp3?origine=webmastergratuit"
            }, {
                "name": "france magreheb 2",
                "note": "Informer, Débattre, Divertir",
                "file": "  http://francemaghreb2.ice.infomaniak.ch/francemaghreb2-high.mp3"
            }, {
                "name": "TOP MUSIC",
                "note": "Musique & infos",
                "file": "http://str0.creacast.com/topmusic1"
            }, {
                "name": "FIP Strasbourg",
                "note": "Actualités musicales",
                "file": "http://direct.fipradio.fr/live/fipstrasbourg-midfi.mp3"
            }, {
                "name": "France Bleue Alsace",
                "note": "Actualités locales",
                "file": "http://icecast.radiofrance.fr/fbalsace-midfi.mp3"
            }, {
                "name": "Europe 1",
                "note": "Actualités & divertissement",
                "file": "http://e1-live-mp3-128.scdn.arkena.com/europe1.mp3"
            }, {
                "name": "France Culture",
                "note": "Actualités & culture",
                "file": "http://direct.franceculture.fr/live/franceculture-midfi.mp3"
            }, {
                "name": "La grosse radio Reggae",
                "note": "Musique Reggae",
                "file": "http://hd.lagrosseradio.info/lagrosseradio-reggae-192.mp3"
            }, {
                "name": "La grosse radio Rock",
                "note": "Musique Rock",
                "file": "http://hd.lagrosseradio.info/lagrosseradio-rock-192.mp3"
            }, {
                "name": "France Inter",
                "note": "Généraliste",
                "file": "http://icecast.radiofrance.fr/franceinter-midfi.mp3"
            }, {
                "name": "France Musique",
                "note": "Classique, Baroque, Jazz",
                "file": "http://icecast.radiofrance.fr/francemusique-midfi.mp3"
            }, {
                "name": "Radio Nova",
                "note": "Chill-out, ambient, DnB",
                "file": "http://broadcast.infomaniak.net/radionova-high.mp3"
            }, {
                "name": "RTL",
                "note": "Actualité & divertissement",
                "file": "http://streaming.radio.rtl.fr/rtl-1-44-128"
            }, {
                "name": "Skyrock",
                "note": "Rap & R'n'B",
                "file": "http://icecast.skyrock.net/s/natio_mp3_128k"
            }, {
                "name": "Virgin Radio",
                "note": "Pop Rock Electro",
                "file": "http://mp3lg4.tdf-cdn.com/9243/lag_164753.mp3"
            }],
            buildPlaylist = $(tracks).each(function(key, value) {
                trackNumber++;
                var trackName = value.name,
                    trackNote = value.note;
                $('#plList').append('<li> \
                    <div class="plItem"> \
                        <div class="plNum">' + minTwoDigits(trackNumber) + '.</div> \
                        <div class="plTitle">' + trackName + '</div> \
                        <div class="plLength" aria-label="' + trackNote + '">?</div> \
                    </div> \
                </li>');
            }),
            trackCount = tracks.length,
            npTitle = $('#npTitle'),
            audio = $('#audio1').get(0),
            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index());
              if (id !== index) {
                playTrack(id);
              }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = tracks[id].file;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        loadTrack(index);
    } else {
        var noSupport = $('#audio1').text();
        alert(noSupport);
    }
});