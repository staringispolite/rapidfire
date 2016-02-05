var options = {
  'specialty': [
    "Dental",
    "Cosmetics",
    "Orthopedic"
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
    'Low',
    'Medium',
    'High'
    ],
  'boughtads': [
    'Yes',
    'No'
    ],
  'circumstances': [
    "Wants you to just email",
    "Normal",
    "Surgeon is right here let me go get him",
    "Surgeon's hard to get a hold of",
    "Just got burned by another marketing company",
    "Extra good mood",
    "Unhappy/Uncooperative",
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
