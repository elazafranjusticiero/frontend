define(['bonzo'], function (bonzo) {

    var ExperimentRelatedContent = function () {

        var self = this;

        this.id = 'RelatedContent';
        this.audience = 0.2;
        this.description = 'Hides related content block on article to see if increases click through on most popular';
        this.canRun = function(config) {
          return (config.page.contentType === "Article") ? true : false;
        };
        this.variants = [
            {
                id: 'control',
                test: function () {
                    var mostPopular =  bonzo(document.getElementById('popular-trails')),
                        data = 'AB | ' + self.id + ' test | control | ' + mostPopular.attr('data-link-name');

                    mostPopular.attr('data-link-name', data);
                }
            },
            {
                id: 'hide',
                test: function () {
                    var mostPopular =  bonzo(document.getElementById('popular-trails'));
                    bonzo(document.querySelector('.js-related')).hide();
                    var data = 'AB | ' + self.id + ' test | hide | '  + mostPopular.attr('data-link-name');
                    mostPopular.attr('data-link-name', data);
                }
            }
        ];
    };

    return ExperimentRelatedContent;

});
