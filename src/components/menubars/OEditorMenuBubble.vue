<template>
  <editor-menu-bubble :editor="editor" v-slot="editorContext">
    <section class="tiptap-menububble"
             :class="{ 'is-active': editorContext.menu.isActive && selectedCellSize === 0 }"
             :style="`left: ${editorContext.menu.left}px; bottom: ${editorContext.menu.bottom}px;`">
      <template v-for="(item, index) of bubbleToolbar">
        <q-separator vertical inset :key="index" v-if="item==='separator'" />
        <component :key="index"
                   :name="item"
                   :is="getName(item)"
                   :editor="editor"
                   v-bind="editorContext"
                   v-else-if="typeof item === 'string'" />
        <component :key="index"
                   :is="item"
                   :editor="editor"
                   v-bind="editorContext"
                   v-else />
      </template>
    </section>
  </editor-menu-bubble>
</template>

<script>
import { EditorMenuBubble } from 'tiptap'
import { CommandComponents, BubbleToolbar } from 'src/utils/menu'

import OForeColorDropdown from 'src/components/buttons/OForeColorDropdown'
import OBackColorDropdown from 'src/components/buttons/OBackColorDropdown'
import OFontFamilyDropdown from 'src/components/buttons/OFontFamilyDropdown'
import OAlignDropdown from 'src/components/buttons/OAlignDropdown'
import OAlignGroup from 'src/components/buttons/OAlignGroup'
import OLineHeightDropdown from 'src/components/buttons/OLineHeightDropdown'
import OHeadingDropdown from 'src/components/buttons/OHeadingDropdown'
import OHeadingList from 'src/components/buttons/OHeadingList'

import OAddMoreBtn from 'src/components/buttons/OAddMoreBtn'
import OPhotoBtn from 'src/components/buttons/OPhotoBtn'
import OTableBtn from 'src/components/buttons/OTableBtn'
import OTableGroup from 'src/components/buttons/OTableGroup'

import OMenubarBtn from 'src/components/buttons/OMenubarBtn'
import OSimpleCommandBtn from 'src/components/buttons/OSimpleCommandBtn'
import OMetaInput from 'src/components/common/OMetaInput'

export default {
  name: 'page-quasar-tiptap-all',
  data () {
    return {
      bubbleToolbar: BubbleToolbar,
    }
  },
  props: {
    editor: {
      type: Object
    },
    toolbar: {
      type: Array,
      default: function () {
        return []
      }
    },
    selectedCellSize: {
      type: Number,
      default: 0
    }
  },
  components: {
    EditorMenuBubble,
    OMenubarBtn,
    OSimpleCommandBtn,
    OMetaInput,
    OForeColorDropdown,
    OBackColorDropdown,
    OFontFamilyDropdown,
    OAlignDropdown,
    OAlignGroup,
    OLineHeightDropdown,
    OHeadingDropdown,
    OHeadingList,
    OAddMoreBtn,
    OPhotoBtn,
    OTableBtn,
    OTableGroup
  },
  methods: {
    getName (item) {
      return CommandComponents[item] || 'o-simple-command-btn'
    },
  },
  mounted () {
  },
  deactivated () {
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus">
</style>
