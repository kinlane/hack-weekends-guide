---
layout: post
title: Open Sourcing Hack Weekends Using Github
---
{% include JB/setup %}

<p><a href="http://hackweekends.com/index.html" target="_blank"><img src="https://s3.amazonaws.com/kinlane-productions/hackweekends/Tag-Cloud-Hack-Weekends-Github.png" alt="" width="350" align="right" /></a></p>
<p>I&rsquo;ve been maintaining a calendar of hackathons for all of 2012.  Originally it was just a section off of <a title="API Evangelist" href="http://apievangelist.com">API Evangelist</a>, but eventually the site needed to be its own project.  Up until now its just been a blog and calendar of events I curate from Eventbrite, Twitter, Google, Eventful and event organizers.</p>
<p>I spend about 8-12 hours a week curating the events and stories for blog posts, and with the increase in the number hackathons over 2012, so does the time I need to maintain.  I was adding an API so other users can add to calendar or event guest post, then I decided I would like to also have databases of hackathon organizers, sponsors, vendors, venues and other key building blocks of hackathons.</p>
<p>My goal is to create an information hub for the hackathon community.  But an &ldquo;open API&rdquo; didn&rsquo;t seem like enough.  I wanted everything about it to be open and accessible, as well as community owned.  I decided to publish&nbsp;<a title="Hack Weekends" href="http://hackweekends.com/index.html">Hack Weekends on Github</a> and run it like an open source project.</p>
<p>I launched the site using <a title="Github Pages" href="http://pages.github.com/">Github Pages</a> with <a title="Jekyll" href="https://github.com/mojombo/jekyll">Jekyll</a>.  These run the pages and blog for Hack Weekends. &nbsp;But, I needed something to run the calendar, and other systems.   I wanted them to be simple--I went with <a href="http://mustache.github.com/">Mustache Templates</a> + JSON stores.</p>
<p>The implementation isn't perfect.   I had problems getting search and sort tools to work, so I scaled back to a minimal viable implementation.  I got the following areas up:</p>
<ul class="mainlist">
<li><strong>Hackathon Calendar </strong>- Listing of hackathons global, sorted by city (for now)</li>
<li><strong>Cities Hackathon Directory</strong> - Breakdown of hackathons by cities</li>
<li><strong>Hack Weekends Blog</strong> - Blog running on Jekyll, which I edit using prose.io</li>
<li><strong>Hack Weekends News </strong>- Curated, relevant hackathon links from my pinboard</li>
</ul>
<p>I will get all the bells and whistles in there soon. Before that, I&rsquo;m working on a basic Github template for planning and executing a basic hackathon.  I would like to see hackathon organizers using a common, open approach to planning and delivering hackathons around the globe.  I&rsquo;m hoping it will work in conjunction with an open approach to Hack Weekends and other hackathon community sites.</p>
<p>Hack Weekends is a work in progress.  I went ahead and made it live, as its about 85% of what I had on the previous version.  Having it running as a completely client-side and static site on Github will force me to learn to approaches to manage my content and data in a way that is open and machine readable by default. &nbsp;</p>
<p>Feel free to fork <a href="https://github.com/kinlane/hack-weekends">Hack Weekends</a> and make contributions. &nbsp;You can add blog posts, news or calendar events. &nbsp;I will be building other client side tools for interacting with the site as time goes on. &nbsp;</p>