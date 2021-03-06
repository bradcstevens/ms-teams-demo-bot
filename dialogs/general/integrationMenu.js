module.exports = () => {
    bot.dialog("/integrationMenu", [
            (session) => {
                let card = new builder.ThumbnailCard(session)
                    .title("Capabilities")
                    .subtitle("Apps I am integrated with")
                    .text("Select or say an option below to see what I can do with the applications I'm integrated with")
                    .buttons([
                        builder.CardAction.imBack(
                            session,
                            "Show me what you can do with Microsoft Online Services",
                            "Microsoft Online Services"                            
                        ),
                        builder.CardAction.imBack(
                            session,
                            "Show me what you can help me do with ServiceNow",
                            "ServiceNow"
                        )
                    ]);
                let message = new builder.Message(session).addAttachment(card);
                session.endDialog(message);
            }
        ])
        .triggerAction({
            matches: "integrationMenu"
        })
        .endConversationAction("endGreeting", "Ok. Goodbye.", {
            matches: /^cancel$|^goodbye$|^nevermind$|^never mind$|^exit$|^quit$|^start over$/i,
            confirmPrompt: "Are you sure?"
        });
}