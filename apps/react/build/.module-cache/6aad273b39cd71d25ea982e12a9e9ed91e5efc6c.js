/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoConstants
 */

var keyMirror = require('keymirror');

module.exports = keyMirror({
  PHOTO_CREATE: null,
  PHOTO_COMPLETE: null,
  PHOTO_DESTROY: null,
  PHOTO_DESTROY_COMPLETED: null,
  PHOTO_TOGGLE_COMPLETE_ALL: null,
  PHOTO_UNDO_COMPLETE: null,
  PHOTO_UPDATE_TEXT: null
});