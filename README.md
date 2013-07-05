glass
=====

Google Glass Test Application

The purpose of this application is to provide an interface between Google Glass
and Atlassian's hipchat system.

The program will consist of three elements:

1) interface to hipchat
2) queueing mechanism to manage the message flow between hipchat and glass
3) Glass handler to handle posts to Glass as well as responses from Glass

Glass interface

Hipchat messages are flowed to the Glass timeline when they are received.
The Glass wearer can reply to messages or dismiss them from the timeline.
Messages cannot originate from Glass at this time.

Messages will be grouped by chatroom.  The chatroom group will be created when
the first message is received from hipchat.  Replies can be posted and are
displayed on the timeline under the group card.


