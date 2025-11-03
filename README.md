


Map images generated at https://snazzymaps.com/build-a-map/edit/645865.

Favicons generated using https://realfavicongenerator.net/

Spotify embed: https://developer.spotify.com/documentation/embeds/tutorials/creating-an-embed

Theme generated at: https://bootstrap.build/app/project/itOOoHSpjlaO

Events
------
The _events folder has been replaced by a connection to Church Suite, using their v1 JSON API.

It's based on the implementaion demo'd at <https://kingshope.church/events>. This uses Alpine.js as well as an [Embed Script library](https://github.com/ChurchSuite/embed-json-script) created by Church Suite. This will likely be deprecated in favour of their v2 APIs, but hopefully will remain supportedfor a while.

The script references are defined in _head.html. The feed is defined by copying the id from ChurchSuite. Go to <https://trinitysouthchch.churchsuite.com/calendar/module#embed>, locate the relevant calendar, click 'More', 'Developer JSON', and extract the id from the link.

One limitation of this library is the feed configuration is not quite based on the underlying configuration in Church Suite. While event period does seem to be reflected in the API, _Merge Sequences_ does not; these have to be passed in as query strings. These are defined in the [Embed API](https://github.com/ChurchSuite/churchsuite-api/blob/master/modules/embed.md).

From trial and error, this can be defined as follows:
```
x-data="CSEvents({configuration: '6bb13bb1-5a49-4368-806a-79dd7bab7e16', merge: 'sequence'})"
```
Presumably other configurations can be similarly applied.

As for the templates used to distplay the events, the attributes and structures are described at <https://alpinejs.dev/>
