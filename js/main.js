// Navigation
const nav = document.getElementById('nav');
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== Case Data (V2) =====
const caseData = {
  game: [
    { category: '大型活动传播', title: '叠纸三城巡回流浪动物救助公益项目', intro: '零传播投放撬动千万级自然流量',
      body: '<p>统筹叠纸集团三城巡回公益IP全案传播，联动公益机构落地线下领养、科普展览、宠物义诊、流浪动物摄影展等多元场景传播，通过内容叙事重塑大众对流浪动物的认知，系统化打造企业温情向善的品牌人设，搭建可长期复用的常态化公益执行模式。</p><p>项目以零传播投放撬动千万级自然流量，全网自然曝光突破1123.4万，线下累计接待6000+人次参与，收获主流及公益垂直媒体广泛报道。项目深化了叠纸"温暖陪伴"的品牌认知，积累了大量公益行业资源，为完善集团企业社会责任体系打下基础，实现品牌好感度与行业公益资源的双向沉淀。</p>' },
    { category: '权威媒体合作', title: '叠纸旗下游戏IP「暖暖」登上2025央视网络春晚', intro: '全网曝光超67亿，拉升用户粘性，拓展圈层口碑',
      body: '<p>促成叠纸游戏旗下核心IP"暖暖"登上2025年度央视网络春晚舞台，与央视主持人王冰冰、SING女团及虚拟嘉宾合作出演跨次元歌舞秀《寄明月》。这是叠纸游戏首次登上央视主流平台，全网曝光超67亿，引爆全网讨论热度，有效拉升用户粘性与圈层口碑，同时成功打破游戏品牌固有圈层壁垒，极大提升了品牌在主流舆论场的知名度，完成产品影响力与品牌国民美誉度的双重升级，深化品牌精品内容创作的核心标签。</p><p><a href="https://v.cctv.cn/2025/01/22/VIDEJe27CRSHaanolYilmleg250122.shtml" target="_blank" rel="noopener">观看节目回放</a></p>' },
    { category: '游戏出海传播', title: '米哈游新作《星布谷地》首曝境外传播', intro: '新品海外媒体声量较同期首曝竞品高出81.84%',
      body: '<p>操盘《星布谷地》产品全球化首发与CB测试全周期海外PR全案，依托海外游戏传播生态，搭建标准化海外媒体沟通体系与传播策略，同步落地舆情风险预案、英文内容创作、头部媒体邀约及专访统筹等全链路工作。</p><p>项目实现IGN、法米通两大头部游戏媒体同步官宣首发，累计落地20余家海外重点媒体深度测评、全网海外发稿超1300篇。新品海外媒体声量较同期首曝的竞品高出81.84%，传播周期内敏感及负面舆情占比<5%，为产品长线全球化运营与圈层用户沉淀打下良好基础。</p>' },
    { category: '舆情管理', title: '叠纸游戏·2025年度 3·15舆情管控', intro: '在高敏感舆情周期内有效实现品牌舆情风险可控',
      body: '<p>主导品牌年度最高敏感节点的舆情风控全案，搭建「前置排查—预案储备—应急处置—事后修复」的闭环管控体系。针对未成年人合规、游戏内容审核、电商客诉三大核心高风险场景，完成集团全线业务的系统性风险盘点，联动业务端前置整改优化，搭建分级公关话术与应急素材储备机制。</p><p>在3·15舆情敏感期快速启动专项应急机制，统筹内部协同、官方发声、媒体沟通与负面拦截全流程，实现高风险场景的精准管控与节奏把控。同时沉淀标准化、可复用的大型敏感节点舆情风控流程与响应机制，为品牌后续常态化舆情管理、风险前置治理建立成熟规范体系。</p>' }
  ],
  beauty: [
    { category: '新品上市传播', title: '自然堂·防晒新品上市整合营销', intro: '创新内容打法实现单品声量破圈',
      body: '<p>全盘操盘自然堂防晒新品上市全域整合营销全案，借势2018年社媒兴起的传播趋势，打破美妆单品传统宣发固化模式，创新打造「明星纪实微综艺+权威专业测评」双驱动传播体系。策划落地7集郑恺喜马拉雅极限防晒视频，以高原实景场景直观验证产品核心功效，联动ELLE等头部时尚媒体输出专业实验室测评内容，兼顾大众传播话题性与行业权威公信力，搭建「趣味种草+专业背书」的完整闭环传播链路。</p><p>全网总曝光达3.37亿，超额225.2%完成既定传播指标，为品牌天猫旗舰店、微淘私域阵地导入超2000万精准流量，高效提升产品市场认知与用户种草转化。创新的内容打法成功实现单品声量破圈，精准赋能终端销售。</p><p><a href="https://www.digitaling.com/projects/26718.html" target="_blank" rel="noopener">查看微综艺视频</a></p>' },
    { category: '大型活动全案', title: '首届东方美谷国际化妆品大会', intro: '政企合作，以顶级产业盛会赋能区域产业集群升级',
      body: '<p>全盘操盘首届东方美谷国际化妆品大会全域传播，构建全球化美妆全产业链交流传播平台。统筹大会整体传播体系与行业内容落地，大会汇聚十余国近500位行业领袖、专家学者参会，搭建常态化全球美妆产业对话机制，同步落地东方美谷指数、行业白皮书首发等核心重磅内容，建立东方美谷作为全球美妆产业集群地的专业话语权。</p><p>项目全域总曝光量突破15亿，成功助力上海奉贤区打造「东方美谷」国家级美妆产业IP标杆地位。依托大会顶级产业势能与舆论热度，一年内助力区域落地17个美妆产业项目，撬动超200亿产业投资、新增400亿+产业产能，打造政企联动、产业赋能的标杆级产业传播范本。</p>' }
  ],
  tech: [
    { category: '大型展会传播', title: 'Unity首次参展进博会CIIE专项传播', intro: '登陆《焦点访谈》等央视核心栏目，最大化释放国家级展会的传播势能',
      body: '<p>主导Unity进博会品牌首秀顶层传播战略，创新联动「新品首发、沉浸式科技展台、行业平行论坛」多维传播场景，统筹全渠道宣发、媒体公关、现场传播与话题运营全链路工作，最大化释放国家级展会的传播势能，突破品牌原有行业认知壁垒，系统性提升政企及行业端品牌公信力。</p><p>全网总曝光突破32亿，展台在CCTV1《新闻联播》露出，并成功斩获CCTV1《焦点访谈》等央视核心栏目权威报道，实现品牌官方公信力跨越式升级。借助顶级展会传播复利，深度夯实Unity全球实时3D技术头部品牌的行业地位，完成品牌国民度与专业影响力的双重跃升。</p>' },
    { category: '大型展会传播', title: 'Unity首次参展上海车展专项传播', intro: '认知建设先行，重塑品牌定位，精准赋能全新行业赛道开拓',
      body: '<p>统筹Unity上海车展传播全案，聚焦品牌业务破局需求，针对性打破大众对Unity仅限游戏引擎的固化认知。深度挖掘实时3D技术在智能座舱、车载交互等场景的商业化价值，针对性布局汽车垂直赛道传播，搭建专属行业媒体资源矩阵，定向输出To B端行业解决方案与技术价值，完成品牌在汽车赛道的认知构建。</p><p>本次车展全域传播累计曝光达9.2亿，累计沉淀450余条高质量精准商业线索，高效赋能品牌To B业务拓客引流，为智能座舱新业务落地、拓展新能源汽车赛道打下基础。</p>' },
    { category: '投融资传播', title: 'Unity·中国合资公司', intro: '美股上市企业在华业务拆分的投融资战略传播',
      body: '<p>统筹Unity中美拆分及中国合资公司落地的投融资战略传播，深度适配复杂资本沟通场景，统筹全球总部、国内资本、产业股东及行业市场多方诉求，精准传递企业本土化深耕、长期布局的核心战略，前置规避资本类舆情风险，及时响应突发情况，顺利完成估值10亿美元合资项目的全周期闭环传播，保障重大资本项目平稳落地，为中国合资公司的品牌本土常态化深耕、业务规模化拓展开辟局面。</p>' },
    { category: '危机公关', title: 'Unity·全球收费模式调整危机处理', intro: '亲历Unity品牌史上最严重的全球性信任危机',
      body: '<p>事件背景：2023年9月Unity突发推出按游戏安装量计费的Runtime Fee新政，政策发布瞬间引爆全球开发者社区；海内外独立工作室、头部游戏厂商集体抗议，大量开发者公开表态迁移至竞品引擎，舆情快速扩散至行业媒体与资本市场，品牌遭遇成立以来最严重的信任危机。</p><p>应对策略：依托「前置预判—全域值守—分层处置—长效修复」全流程舆情管控体系，前期通过识别政策发布潜在冲突点，针对个人开发者、中小团队、头部厂商分层储备沟通口径与应对方案；危机期间启动7×24小时全域舆情值守，快速响应国内媒体问询，跟进发布全球总部官方声明，输出答疑内容分层疏导极端负面情绪；舆情平复后全面复盘舆论走势，定向修复媒体与开发者口碑，最大限度压降政策迭代带来的品牌声誉损耗与商业流失风险。</p>' }
  ],
  social: [
    { category: '微信内容运营', title: '叠纸·创新专栏加深用户粘性', intro: '创新开辟"阿叠探索编辑部"专栏，单篇平均阅读量17000+',
      body: '<p>带领团队在企业常规内容基础上，创新性开辟"阿叠探索编辑部"专栏，以「团队幕后纪实+开发故事揭秘」为核心内容形式，深度挖掘游戏研发、内容创作幕后故事，通俗化解读产品创作逻辑与品牌理念，拉近品牌与玩家、大众用户的距离。专栏单篇平均阅读量17000+，远超公众号常规内容8000的平均阅读水平，内容传播度、用户互动率、口碑反馈稳居账号头部，持续正向塑造企业精品创作、真诚用心的公众形象。</p>',
      link: 'https://mp.weixin.qq.com/s/0XdLpVzbJcZFs72rOswoAA' },
    { category: '微信内容运营', title: 'Unity·实时3D渲染技术通俗化传播', intro: '面向企业决策者讲清技术价值，稳定转化商业线索',
      body: '<p>操盘 Unity 中国官方微信订阅号内容运营，带领团队依托覆盖游戏、智能座舱、工业仿真、数字文旅的一线落地案例，完成「晦涩技术术语→通俗行业价值→精准商业痛点」的三层内容转化。跳出纯技术科普视角，面向企业决策者、项目方讲清实时 3D 技术能够解决的业务痛点，降低客户认知门槛，激发合作意向，通过持续、体系化内容输出，有效培育潜在客户，稳定转化可跟进的商业线索。</p>',
      link: 'https://mp.weixin.qq.com/s/2seKkwG4dgpl0LwLhxNUfQ' }
  ],
  copy: [
    { category: '策划方案', title: '新品上市传播策划案', intro: '',
      body: '',
      link: 'file:///Users/shangjin/Codex%20Workplace/portfolio/references/%E5%95%86%E4%B8%9A%E6%96%87%E6%A1%88/Launch%20Plan-Beauty%20New%20Product-Dibi.pdf' },
    { category: '品牌故事', title: 'HONMA品牌故事', intro: '',
      body: '',
      link: 'file:///Users/shangjin/Codex%20Workplace/portfolio/references/%E5%95%86%E4%B8%9A%E6%96%87%E6%A1%88/Brand%20Story-HONMA.pdf' },
    { category: '品牌介绍', title: '上海来福士广场项目介绍', intro: '',
      body: '',
      link: 'file:///Users/shangjin/Codex%20Workplace/portfolio/references/%E5%95%86%E4%B8%9A%E6%96%87%E6%A1%88/Project%20Intro-Raffles%20City.pdf' },
    { category: '活动主持词', title: '大白兔中秋活动主持词', intro: '',
      body: '',
      link: 'file:///Users/shangjin/Codex%20Workplace/portfolio/references/%E5%95%86%E4%B8%9A%E6%96%87%E6%A1%88/Host%20Script-Mid-Autumn%20Festival%20Event-White%20Rabbit.pdf' },
    { category: '新闻稿', title: '羽西产品上市新闻稿', intro: '',
      body: '',
      link: 'file:///Users/shangjin/Codex%20Workplace/portfolio/references/%E5%95%86%E4%B8%9A%E6%96%87%E6%A1%88/Press%20Release-Produc%20lunch-YUESAI.pdf' },
    { category: '新闻稿', title: 'OSIM傲胜AWE展会新闻稿', intro: '',
      body: '',
      link: 'file:///Users/shangjin/Codex%20Workplace/portfolio/references/%E5%95%86%E4%B8%9A%E6%96%87%E6%A1%88/Press%20Release-AWE-OSIM.pdf' },
    { category: '新闻稿', title: 'LuOne凯德晶萃广场活动新闻稿', intro: '',
      body: '',
      link: 'file:///Users/shangjin/Codex%20Workplace/portfolio/references/%E5%95%86%E4%B8%9A%E6%96%87%E6%A1%88/Press%20Release-LuOne.pdf' },
    { category: '英文内容', title: '英文Blog - Zenless Zone Zero', intro: '',
      body: '',
      link: 'https://blog.playstation.com/2025/12/19/zenless-zone-zero-version-2-5-introduces-dual-form-void-hunter-on-december-30/' },
    { category: '英文内容', title: '英文新闻稿 - HoYoverse新作发布', intro: '',
      body: '',
      link: 'https://www.gamespress.com/en-US/HoYoverse-Unveils-Its-Brand-New-Cosmic-Life-Sim-Petit-Planet' },
    { category: '英文内容', title: '英文产品测评 - Infinity Nikki', intro: '',
      body: '',
      link: 'file:///Users/shangjin/Codex%20Workplace/portfolio/references/%E5%95%86%E4%B8%9A%E6%96%87%E6%A1%88/Product%20Review-Infinity%20Nikki.pdf' }
  ]
};

// Intro text for each category
const categoryIntros = {
  game: '游戏传播',
  beauty: '美妆营销',
  tech: '科技品牌',
  social: '社媒运营',
  copy: '商业文案'
};

const filterBtns = document.querySelectorAll('.filter-btn');
const caseGrid = document.getElementById('caseGrid');
const modal = document.getElementById('caseModal');
const modalBody = document.getElementById('modalBody');
let currentFilter = 'game';

function renderCards(filter) {
  const items = caseData[filter] || [];
  if (!caseGrid) { console.error('caseGrid is null'); return; }
  if (!items || items.length === 0) { console.error('No items for filter:', filter); caseGrid.innerHTML = ''; return; }
  caseGrid.innerHTML = items.map((item, i) => {
        if (filter === 'copy') {
      return `<div class="case-card case-card--compact" data-idx="${i}" data-link="${item.link || '#'}">
        <div class="case-card-cat">${item.category}</div>
        <div class="case-card-title">${item.title}</div>
        <div class="case-card-desc">${item.intro}</div>
      </div>`;
    }
    if (filter === 'social') {
      return `<div class="case-card" data-idx="${i}" data-link="${item.link || '#'}">
        <div class="case-card-cat">${item.category}</div>
        <div class="case-card-title">${item.title}</div>
        <div class="case-card-desc">${item.intro}</div>
      </div>`;
    }
    return `<div class="case-card" data-idx="${i}">
      <div class="case-card-cat">${item.category}</div>
      <div class="case-card-title">${item.title}</div>
      <div class="case-card-desc">${item.intro}</div>
    </div>`;
  }).join('');

  document.querySelectorAll('.case-card').forEach(el => {
    const idx = parseInt(el.dataset.idx);
    const item = items[idx];
    el.addEventListener('click', () => {
      if (filter === 'social' || filter === 'copy') {
        if (item.link && item.link !== '#') {
          window.open(item.link, '_blank');
        }
      } else {
        openModal(item);
      }
    });
  });
}

function openModal(item) {
  modalBody.innerHTML = `
    <div class="case-detail-intro">${item.intro}</div>
    <span class="case-detail-category">${item.category}</span>
    <div class="case-detail-title">${item.title}</div>
    <div class="case-detail-body">${item.body || '<p>' + item.intro + '</p>'}</div>
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}


function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderCards(currentFilter);
  });
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Init - default to game
renderCards('game');
