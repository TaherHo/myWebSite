/**
 * Created by taho on 11.05.17.
 */
require.config( {
    "waitSeconds" : 6
    });

require(["text!../../templates/imageTemp.html!strip", "third-party/handlebars", "third-party/domReady"]
    , function (temp, handlebars, domReady) {

        domReady(function () {

            var $ = window.$;
            var template = handlebars.compile(temp);
            var data = {
                'Title': 'Image-page',
                'user_name': 'TaHo',
                'scr4image':'https://ichef-1.bbci.co.uk/news/624/cpsprodpb/1837F/production/_96099199_450566bf-140d-4623-8688-c151da61d8ed.jpg'
            };
            var instead = template(data).trim();
            $('#images').html(instead);
        });
    });

