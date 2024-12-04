<script setup lang="ts">
import { ref, onMounted } from 'vue';
import VPMenuLink from 'vitepress/dist/client/theme-default/components/VPMenuLink.vue';
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue';

defineProps<{
  screenMenu?: boolean
}>();

// List of versions with display labels, corresponding domains, and protocols
const versions = [
  { key: 'modern', label: 'Modern UI', domain: 'support.mantishub.com', protocol: 'https' },
  { key: 'classic', label: 'Classic UI', domain: 'classic.mantishub.com', protocol: 'http' },
];

// Reactive references with default values
const currentVersion = ref('modern');
const currentHost = ref('');
const currentProtocol = ref('https');
const currentPath = ref('/');
const isOpen = ref(false);

// Reactive array for versions to display in the switcher
const availableVersions = ref<typeof versions>([]);

// Function to get the full URL for a version
const getVersionUrl = (versionKey: string) => {
  const version = versions.find(v => v.key === versionKey);
  if (version) {
    return `${version.protocol}://${version.domain}${currentPath.value}`;
  }
  // Fallback to home page if version not found
  return `${currentProtocol.value}://${currentHost.value}/`;
};

// Client-side initialization
onMounted(() => {
  // Get current host and protocol
  currentHost.value = window.location.host;
  currentProtocol.value = window.location.protocol.replace(':', '');

  // Determine the current version based on the host
  currentVersion.value = currentHost.value.includes('classic.mantishub.com') ? 'classic' : 'modern';

  // Retain the current path after the domain
  currentPath.value = window.location.pathname + window.location.search + window.location.hash;

  // Filter out the current version from the available versions
  availableVersions.value = versions.filter(v => v.key !== currentVersion.value);
});

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <!-- Flyout menu for non-screen menu -->
  <VPFlyout
    v-if="!screenMenu && availableVersions.length"
    class="VPVersionSwitcher"
    icon="custom-icon"
    :button="versions.find(v => v.key === currentVersion)?.label || 'Switch Version'"
    :label="'Switch Version'"
  >
    <div class="items">
      <VPMenuLink
        v-for="version in availableVersions"
        :key="version.key"
        :item="{
          text: version.label,
          link: getVersionUrl(version.key),
        }"
        :class="{ active: currentVersion === version.key }"
      />
    </div>
  </VPFlyout>

  <!-- Screen menu for mobile -->
  <div v-else-if="screenMenu && availableVersions.length" class="VPScreenVersionSwitcher" :class="{ open: isOpen }">
    <button class="button" aria-controls="navbar-group-version" :aria-expanded="isOpen" @click="toggle">
      <span class="button-text">
        <span class="vpi-versioning custom-icon" />
        {{ versions.find(v => v.key === currentVersion)?.label || 'Switch Version' }}
      </span>
      <span class="vpi-plus button-icon" />
    </button>

    <div id="navbar-group-version" class="items">
      <VPMenuLink
        v-for="version in availableVersions"
        :key="version.key"
        :item="{
          text: version.label,
          link: getVersionUrl(version.key),
        }"
        :class="{ active: currentVersion === version.key }"
      />
    </div>
  </div>
</template>

<style>
.VPMenuLink.active .VPLink.link span {
  font-weight: bold; 
}
</style>

<style scoped>
.VPVersionSwitcher {
  display: flex;
  align-items: center;
}

.VPScreenVersionSwitcher {
  height: 48px;
  overflow: hidden;
  transition: border-color 0.5s;
}

.VPScreenVersionSwitcher .items {
  visibility: hidden;
}

.VPScreenVersionSwitcher.open .items {
  visibility: visible;
}

.VPScreenVersionSwitcher.open {
  padding-bottom: 10px;
  height: auto;
}

.VPScreenVersionSwitcher.open .button {
  padding-bottom: 6px;
  color: var(--vp-c-brand-1);
}

.VPScreenVersionSwitcher.open .button-icon {
  transform: rotate(45deg);
}

.button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 4px 11px 0;
  width: 100%;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.button:hover {
  color: var(--vp-c-brand-1);
}

.button-icon {
  transition: transform 0.25s;
}

::v-deep(.custom-icon) {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url('/switch-direction.svg') no-repeat center;
  background-size: contain;
  margin-right: 8px;
}

@media (max-width: 768px) {
  ::v-deep(.custom-icon) {
    width: 12px;
    height: 12px;
  }
}

@media (max-width: 768px) {
  .VPVersionSwitcher {
    font-size: 14px;
    padding: 8px;
  }
}
</style>

<style>
.VPMenuLink.active .VPLink.link span {
  font-weight: bold; 
}
</style>

<style scoped>
.VPVersionSwitcher {
  display: flex;
  align-items: center;
}

.VPScreenVersionSwitcher {
  height: 48px;
  overflow: hidden;
  transition: border-color 0.5s;
}

.VPScreenVersionSwitcher .items {
  visibility: hidden;
}

.VPScreenVersionSwitcher.open .items {
  visibility: visible;
}

.VPScreenVersionSwitcher.open {
  padding-bottom: 10px;
  height: auto;
}

.VPScreenVersionSwitcher.open .button {
  padding-bottom: 6px;
  color: var(--vp-c-brand-1);
}

.VPScreenVersionSwitcher.open .button-icon {
  transform: rotate(45deg);
}

.button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 4px 11px 0;
  width: 100%;
  line-height: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.button:hover {
  color: var(--vp-c-brand-1);
}

.button-icon {
  transition: transform 0.25s;
}

::v-deep(.custom-icon) {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url('/switch-direction.svg') no-repeat center;
  background-size: contain;
  margin-right: 8px;
}

@media (max-width: 768px) {
  ::v-deep(.custom-icon) {
    width: 12px;
    height: 12px;
  }
}

@media (max-width: 768px) {
  .VPVersionSwitcher {
    font-size: 14px;
    padding: 8px;
  }
}
</style>