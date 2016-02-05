var options = {
  'specialty': [
    "dental",
    "cosmetics",
    "orthopedic"
    ],
  'size': [
    "S",
    "M",
    "L"
    ],
  'budget': [
    "$100",
    "$300",
    "$500",
    "$1000"
    ],
  'year': [
    '1975',
    '1982',
    '1995',
    '2000',
    '2010'
    ],
  'cooperation': [
    'low',
    'medium',
    'high'
    ],
  'boughtads': [
    'yes',
    'no'
    ],
  'circumstances': [
    "Wants you to just email",
    "Surgeon's hard to get a hold of",
    "Unhappy/uncooperative",
    "Hesitant about our credentials",
    "Normal"
    ]
};

$('body').ready(function() {
  // For each option
  $.each(options, function(option, possibilities) {
    // Pick one
    var choice = possibilities[Math.floor(Math.random() * possibilities.length)];
    // Set the corresponding id to the selection
    console.log("setting id " + option + " to " + choice);
    $('#' + option).html(choice);
  });
});
