<template>
	<div>
		<form data-netlify="true" data-netlify-honeypot="bot-field" method="POST" name="contact">
			<p style="display:none;">
				<label>Don't fill this out if you're human: <input name="bot-field"/></label>
			</p>
			<p>
				<label>Nome: <input name="name" type="text"/></label>
			</p>
			<p>
				<label>Email: <input name="email" type="email"/></label>
			</p>
			<p>
				<label>Messaggio: <textarea name="message"></textarea></label>
			</p>
			<p>
				<button type="submit">Invia</button>
			</p>
		</form>
	</div>
</template>

<script>
export default {
	name: "ContactForm"
};
</script>

<style scoped>

</style>
