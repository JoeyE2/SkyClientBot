"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class invite extends discord_akairo_1.Command {
    constructor() {
        super("invite", {
            aliases: ["invite"],
        });
    }
    async exec(message) {
        if (message.author.id == 492488074442309642) {
            message.author.send(process.env["invite"]);
            message.channel.send(`Invite has (probably) been sent to you.`);
        }
        else {
            message.channel.send(`and why exactly would i let you invite me to your server?`);
        }
    }
}
exports.default = invite;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL293bmVyL2ludml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUV6QyxNQUFxQixNQUFPLFNBQVEsd0JBQU87SUFDdkM7UUFDSSxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ1osT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1NBQ3RCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU87UUFDZCxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLGtCQUFrQixFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtZQUMxQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFBO1NBQ2xFO2FBQ0k7WUFDRCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywyREFBMkQsQ0FBQyxDQUFBO1NBQ3BGO0lBQ0wsQ0FBQztDQUNKO0FBaEJELHlCQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW52aXRlIGV4dGVuZHMgQ29tbWFuZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKFwiaW52aXRlXCIsIHtcbiAgICAgICAgICAgIGFsaWFzZXM6IFtcImludml0ZVwiXSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZXhlYyhtZXNzYWdlKSB7XG4gICAgICAgIGlmIChtZXNzYWdlLmF1dGhvci5pZCA9PSA0OTI0ODgwNzQ0NDIzMDk2NDIpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UuYXV0aG9yLnNlbmQocHJvY2Vzcy5lbnZbXCJpbnZpdGVcIl0pXG4gICAgICAgICAgICBtZXNzYWdlLmNoYW5uZWwuc2VuZChgSW52aXRlIGhhcyAocHJvYmFibHkpIGJlZW4gc2VudCB0byB5b3UuYClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKGBhbmQgd2h5IGV4YWN0bHkgd291bGQgaSBsZXQgeW91IGludml0ZSBtZSB0byB5b3VyIHNlcnZlcj9gKVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==