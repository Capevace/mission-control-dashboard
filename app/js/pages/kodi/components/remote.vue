<template>
	<div class="flex flex-wrap w-full justify-center pt-5 text-white">
		<div class="flex w-full justify-around">
			<button class="w-12 h-12 bg-main-darkest rounded-full p-3">
				<home-icon class="text-main"></home-icon>
			</button>
			<button class="w-12 h-12 bg-main-darkest rounded-full">O</button>
		</div>
		<div class="w-48 h-48 bg-main-darkest relative rounded-full">
			<span class="absolute bg-white w-px h-px" style="left: 50%; top: 20%;"></span>
			<span class="absolute bg-white w-px h-px" style="left: 50%; top: 80%;"></span>
			<span class="absolute bg-white w-px h-px" style="left: 20%; top: 50%;"></span>
			<span class="absolute bg-white w-px h-px" style="left: 80%; top: 50%;"></span>
		</div>
		<div class="flex w-full justify-around ">
			<button class="w-12 h-12 bg-main-darkest rounded-full justify-center content-center">
				<arrow-left-icon class="text-main w-6"></arrow-left-icon>
			</button>
			<button class="w-12 h-12 bg-main-darkest rounded-full">
				<ellipsis-h-icon class="text-main w-6"></ellipsis-h-icon>
			</button>
		</div>
	</div>
</template>
<script type="text/javascript">
import homeIcon from '@components/icons/home-icon';
import arrowLeftIcon from '@components/icons/arrow-left-icon';
import ellipsisHIcon from '@components/icons/ellipsis-h-icon';

export default {
	components: {
		homeIcon,
		arrowLeftIcon,
		ellipsisHIcon
	}
}
</script>