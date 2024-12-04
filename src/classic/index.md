<script setup>
import { useRouter } from 'vitepress'
import { onMounted } from 'vue'

let router = useRouter()

onMounted(() => {
  router.go('/introduction')
})
</script>
