const composeTweet = require('./composeTweet');
const profile = require('./profile');
const follow = require('./follow');
const unfollow = require('./unfollow');
const likeTweet = require('./likeTweet');
const unlikeTweet=require('./unlikeTweet');
const retweet=require('./retweet');

module.exports = {
    composeTweet: composeTweet,
    profile: profile,
    follow:follow,
    unfollow:unfollow,
    likeTweet: likeTweet,
    unlikeTweet:unlikeTweet,
    retweet:retweet
}