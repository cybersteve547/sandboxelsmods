
elements.mc_water = {
	color: "#2965ff",
	behavior: behaviors.LIQUID,
	category: "Minecraft",
	state: "liquid",
	reactions: {
		"mc_lava": {elem1: "mc_cobblestone"},
	}
};

elements.mc_lava = {
	color: "#ff9f29",
	behavior: behaviors.LIQUID,
	category: "minecraft",
	state: "liquid",
};

elements.mc_cobblestone = {
	color: "#666666",
	behavior: behaviors.WALL,
	category: "land",
	state: "solid",
};
