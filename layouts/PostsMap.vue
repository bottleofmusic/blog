<template>
	<div>
		<l-map id="posts-map" :options="mapOptions">
			<l-tile-layer :attribution="attribution" :url="url"/>
			<l-marker v-for="marker in markers" :lat-lng="marker.latlng">
				<l-popup>
					<router-link :to="marker.path">
						{{ marker.name }}
					</router-link>
				</l-popup>
			</l-marker>
		</l-map>
	</div>
</template>

<script>
import {LMap, LMarker, LPopup, LTileLayer} from "vue2-leaflet";
import {Icon} from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
	iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
	iconUrl: require("leaflet/dist/images/marker-icon.png"),
	shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default {
	name: "PostsMap",
	components: {LMap, LMarker, LTileLayer, LPopup},
	data() {
		return {
			markers: [],
			url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			attribution: "&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
			mapOptions: {
				center: [20, 0],
				zoom: 2,
				minZoom: 2
			}
		};
	},
	mounted() {
		this.$frontmatterKey.list.forEach(it => {
			axios.get("https://nominatim.geocoding.ai/search?format=json&limit=1&q=" + encodeURIComponent(it.name)).then(value => {
				let location = value.data[0];
				if (!location) return;
				this.markers.push({
					name: location["display_name"],
					path: it.path,
					latlng: [location["lat"], location["lon"]]
				});
			});
		});
	}
};
</script>

<style lang="stylus" scoped>
#posts-map
	height: 500px
	width: 100%
</style>
