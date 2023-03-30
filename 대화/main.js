let testObject = App.loadSpritesheet("object.png");
// 사용 가능한 ObjectEffectType
const ObjectEffectType = {
    NONE : 0,
    SHOW_NOTE : 1,
    SHOW_IMAGE : 2,
    PASSWORD_DOOR : 3,
    LINK_WEBSITE : 4,
    EMBED_WEBSITE : 5,
    API_CALL : 6,
    REPLACE_IMAGE : 7,
    NFT_GIVEAWAY : 8,
    NFT_DOOR : 9,
    POST_MESSAGE : 10,
    SHOW_CHAT_BALLOON : 11,
    FT_DOOR : 12,
    POST_MESSAGE_TO_APP : 13,
    DONATION_DOOR : 14,
    IMPASSABLE : 15,
    STAMP : 16,
    TOKEN_DONATION_DOOR : 17,
    CHANGE_OBJECT : 18,
    ANIMATION : 19,
    NFT_DOOR_MOVE : 20,
    INTERACTION_WITH_ZEPSCRIPTS : 21,
    MULTIPLE_CHOICE : 22,
}

App.onStart.Add(function () {
	Map.putObject(5, 5, testObject, { overlap: true });
});

// 플레이어와 오브젝트가 부딪힐 때 실행
App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
	Map.putObject(x, y, testObject, null);
	App.showCenterLabel(
		`${sender.name}님이 좌표: (${x}, ${y}) 에서 오브젝트와 부딪혔습니다.(${tileID})`
	);
});
