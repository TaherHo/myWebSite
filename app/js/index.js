/**
 * Created by taho on 11.05.17.
 */

require(["text!../templates/imageTemp.html!strip","third-party/handlebars", "third-party/domReady"]
    , function (temp, handlebars, domReady) {

        domReady(function () {

            var $ = window.$;
            var template = handlebars.compile(temp);
            var data = {};

            var instead = template(data).trim();
            $('#content').html(instead);
        });
    });

