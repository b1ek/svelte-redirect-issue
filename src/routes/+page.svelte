<script lang="ts">
    export let data;
</script>

<h1>redirect not working on specific accept header</h1>
<p>will likely fail on internet explorer</p>

<form action="/test" method="POST">
    <input type='hidden' name='a' value='b'>
    <input type='submit' value='check ur browser'>
</form>

<hr/>

<p>check it with curl:</p>
<pre>
    curl {data.origin}/test -X POST -d "a=b" -H 'Accept: image/jpeg, */*' -H "Cookie: {data.csrf}" -H 'Origin: {data.origin}' -H 'Referer: {data.origin}/'
</pre>