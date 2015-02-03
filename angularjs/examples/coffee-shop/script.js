(function() {
    var app = angular.module('store', ['store-products']);

    app.controller('StoreController', function() {
        this.products = coffeeTypes;
    });

    var coffeeTypes = [
        {
            name: 'Espresso',
            price: 2.50,
            description: 'Strong black coffee',
            canPurchase: true,
            soldOut: false,
            reviews: [
                {
                    stars: 5,
                    body: "Loved this coffee",
                    author: "joe@thomas.com"
                },
                {
                    stars: 3,
                    body: "Too weak for me",
                    author: "thomas@joe.com"
                }
            ]

        },
        {
            name: 'Cappuccino',
            price: 2.65,
            description: 'A combination of equal parts espresso, steamed milk and milk froth',
            canPurchase: true,
            soldOut: false,
            reviews: [
                {
                    stars: 4,
                    body: "Very good, will make it my regular",
                    author: "alex@thomas.com"
                }
            ]

        },
        {
            name: 'Americano',
            price: 2.55,
            description: 'A single shot of espresso added to a cup of hot water',
            canPurchase: true,
            soldOut: false,
            reviews: []
        },
        {
            name: 'Caffe Latte',
            price: 2.65,
            description: 'A single shot of espresso to three parts of steamed milk',
            canPurchase: true,
            soldOut: false,
            reviews: []
        },
        {
            name: 'Mochachino',
            price: 2.85,
            description: 'A cappuccino or a caffe latte with chocolate syrup or powder',
            canPurchase: true,
            soldOut: false,
            reviews: []
        },
        {
            name: 'Macchiato',
            price: 2.85,
            description: 'Combination of espresso, caramel and foamed milk',
            canPurchase: true,
            soldOut: false,
            reviews: []
        }
    ];

    app.controller("PanelController", function() {
        this.tab = 1;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        };

        this.isSelected = function(checkTab) {
            return (this.tab === checkTab);
        };
    });

    app.controller("ReviewController", function() {
        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        }
    });
})();