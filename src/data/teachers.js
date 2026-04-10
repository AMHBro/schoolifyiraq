/**
 * ترتيب العرض: حسب تسلسل المواد الشائع في السادس الإعدادي (عربي، إنكليزي، ثم العلوم).
 * مسارات الصور: ضع الملفات في public/teachers/
 */
export const TEACHERS = [
  {
    id: 'arabic',
    name: 'الأستاذ حسين علي صبيح',
    subject: 'مادة العربي',
    photo: '/teachers/hussein-arabic.png',
    accentClass: 'from-violet-700 to-purple-800',
    borderClass: 'border-violet-400/60',
  },
  {
    id: 'english',
    name: 'الأستاذ علي رحيم صاحي',
    subject: 'مادة الإنكليزي',
    photo: '/teachers/ali-english.png',
    accentClass: 'from-purple-700 to-fuchsia-800',
    borderClass: 'border-purple-400/60',
  },
  {
    id: 'chemistry',
    name: 'الأستاذ عمر عادل عبد الكريم',
    subject: 'مادة الكيمياء',
    photo: '/teachers/omar-chemistry.png',
    accentClass: 'from-indigo-700 to-violet-800',
    borderClass: 'border-indigo-400/60',
  },
  {
    id: 'physics',
    name: 'الأستاذ محمد اللامي',
    subject: 'مادة الفيزياء',
    photo: '/teachers/mohammed-physics.png',
    accentClass: 'from-violet-800 to-indigo-900',
    borderClass: 'border-violet-500/50',
  },
  {
    id: 'biology',
    name: 'الأستاذ رضا رائد',
    subject: 'مادة الأحياء',
    photo: '/teachers/reda-biology.png',
    accentClass: 'from-fuchsia-700 to-purple-900',
    borderClass: 'border-fuchsia-400/55',
  },
]
