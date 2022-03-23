import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/index' //index
import roadmap from '@/components/roadmap' //roadmap
import games from '@/components/games' //games
import more from '@/components/more' //more

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'home',
			component: Home,
	},

	{
			path: '/roadmap',
			name: 'roadmap',
			component: roadmap,
	},
	{
			path: '/games',
			name: 'games',
			component: games,
	},
	{
			path: '/more',
			name: 'more',
			component: more,
	}
	],
	mode: "history"
})
