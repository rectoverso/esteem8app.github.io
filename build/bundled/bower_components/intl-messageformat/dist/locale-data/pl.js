IntlMessageFormat.__addLocaleData({locale:"pl",pluralRuleFunction:function(e,l){var a=String(e).split("."),t=a[0],n=!a[1],o=t.slice(-1),r=t.slice(-2);return l?"other":1==e&&n?"one":n&&o>=2&&o<=4&&(r<12||r>14)?"few":n&&1!=t&&(0==o||1==o)||n&&o>=5&&o<=9||n&&r>=12&&r<=14?"many":"other"}});