import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('giữ lựa chọn bài học trong state riêng khi render lại', () => {
  assert.match(html, /lessonSelection/);
  assert.match(html, /function setLessonSelection/);
  assert.match(html, /function populateLessonSelectors/);
  assert.doesNotMatch(html, /\$\('#topicSel'\)\.addEventListener\('change',[\s\S]{0,240}state\.lesson='';/);
});

test('không tự ghi đè hoặc xóa đánh giá đã có', () => {
  assert.match(html, /if\(old===level\)return/);
  assert.match(html, /Xác nhận đổi đánh giá/);
  assert.match(html, /function requestClear/);
  assert.match(html, /Xóa đánh giá/);
  assert.match(html, /Chỉ chấm chưa đánh giá/);
  assert.match(html, /Xác nhận ghi đè/);
});

test('ghi nhật ký, hoàn tác và giữ tương thích backup cũ', () => {
  assert.match(html, /changeLog=Array\.isArray\(x\.changeLog\)\?x\.changeLog:\[\]/);
  assert.match(html, /function appendLog/);
  assert.match(html, /function undoLast/);
  assert.match(html, /UNDO_MS=30000/);
  assert.match(html, /state\.lessonSelection=state\.lessonSelection\|\|selectionFromLesson\(state\.lesson,state\.className\)/);
});

test('kế hoạch thao tác chụp đúng record key và từ chối ngữ cảnh thay đổi', () => {
  assert.match(html, /function planChanges\(changes\)/);
  assert.match(html, /const recordKey=x\.key\|\|key\(x\.sid\)/);
  assert.match(html, /if\(plan\.context!==contextSignature\(\)\)/);
  assert.match(html, /state\.records\[x\.key\]/);
  assert.match(html, /state=beforeState;render\(\);updateUndoButton\(\)/);
  assert.match(html, /createUndo=true/);
  assert.match(html, /applyPlan\(plan,'Hoàn tác',\{createUndo:false\}\)/);
});

test('lựa chọn rỗng không được diễn giải thành mục số 0', () => {
  assert.match(html, /if\(!sel\|\|sel\.topic===''\|\|sel\.lesson===''\)return ''/);
  assert.match(html, /sel\.topic!==''&&topics\[Number\(sel\.topic\)\]/);
  assert.match(html, /sel\.lesson!==''&&items\[Number\(sel\.lesson\)\]/);
  assert.match(html, /sel\.content!==''&&contents\[Number\(sel\.content\)\]/);
});
