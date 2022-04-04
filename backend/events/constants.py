EVENT_TYPES = [
    ('AS', 'Appearance or Signing'),
    ('AT', 'Attraction'),
    ('CT', 'Camp, Trip or Retreat'),
    ('CP', 'Concert or Performance'),
    ('CF', 'Conference'),
    ('CV', 'Convention'),
    ('CW', 'Course, Training or Workshop'),
    ('FF', 'Festival or Fair'),
    ('GC', 'Game or Competition'),
    ('MN', 'Meeting or Networking'),
    ('OT', 'Other'),
    ('PS', 'Party or Social Gathering'),
    ('RE', 'Race or Endurance Event'),
    ('RL', 'Rally'),
    ('SC', 'Screening'),
    ('ST', 'Seminar or Talk'),
    ('TR', 'Tour'),
    ('TT', 'Tournament'),
    ('TE', 'Tradeshow or Expo'),
]

EVENT_CATEGORIES = [
    ('AB','Auto, Boat & Air'),
    ('BP','Business & Professional'),
    ('CC','Charities & Causes'),
    ('CO','Communities & Culture'),
    ('FE','Family & Education'),
    ('FB','Fashion & Beauty'),
    ('FM','Fild, Media & Entertainment'),
    ('FD','Food & Drink'),
    ('GP','Government & Politics'),
    ('HW','Health & Wellness'),
    ('HS','Hobbies & Special Interests'),
    ('HL','Home & Lifestyle'),
    ('MU','Music'),
    ('OT','Other'),
    ('PA','Performing & Visual Arts'),
    ('RS','Religion & Spirituality'),
    ('SA','School Activities'),
    ('ST','Science & Technology'),
    ('SE','Seasonal'),
    ('SF','Sports & Fitness'),
    ('TO','Travel & Outdoor')
]


EVENT_STATUSES = [
    ('Draft', 'Draft'),
    ('Live', 'Live'),
    ('Started', 'Started'),
    ('Completed', 'Completed'),
    ('Cancelled', 'Cancelled'),
]

TICKET_STATUSES = [
    ('Purchased', 'Purchased'),
    ('Transferred', 'Transferred'),
    ('Expired', 'Expired'),
]

PAYMENT_CHOICES = [
    ('Free', 'Free'),
    ('Paid', 'Paid'),
    ('Donation', 'Donation'),
]

RESALE_PERMISSIONS = [
    ('All', 'All'),
    ('None', 'None'),
    ('Custom', 'Custom'),
]

SELECT_OPTIONS = [
    ('radio', 'Radio'),
    ('multi-select', 'Multi Select')
]

PROMO_TYPES = [
    ('Percentage', 'Percentage'),
    ('Fixed ', 'Fixed Amount')
]