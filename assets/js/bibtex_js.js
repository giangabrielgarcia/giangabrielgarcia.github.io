





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-7a12427f1445.css" integrity="sha512-ehJCfxRFqU8Lt/+Hwc4cvp41sPisCp1U2d03SlbM3aKVZcxiYDTVmBsAtOVgAtZ912JFOebwrPXr/JcDNd6bGA==" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-872a1af650d2.css" integrity="sha512-hyoa9lDSdLO4uej148d3a/lqZv7lYLCTxfeR5Imh7UWYWSohQE6Wk7D6S+EF/XjgY9ucI+1FkTxr1DUd5PgHwA==" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-e1e1bc98a53e.css" integrity="sha512-4eG8mKU+R9QAnMQwfSIgbo24hS+nUXxSuUs5G5LMQw+5wjC1TSKfgxJb2j61PXya94+wMwN1OT7r7MF5rbdUvw==" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>bibtex-js/bibtex_js.js at master · pcooksey/bibtex-js · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars0.githubusercontent.com/u/1790570?s=400&amp;v=4" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="pcooksey/bibtex-js" property="og:title" /><meta content="https://github.com/pcooksey/bibtex-js" property="og:url" /><meta content="bibtex-js - BibTeX-js can parse a BibTeX-file and render it as part of an HTML file. This way, you can easily add a list of publications to your private homepage or display a list of recommended pu..." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="C656:21A03:2FD0F90:4EDC516:5A8B00B6" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="C656:21A03:2FD0F90:4EDC516:5A8B00B6" name="octolytics-dimension-request_id" /><meta content="iad" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" />
<meta content="https://github.com/hydro_browser_events" name="hydro-events-url" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NDM1ZTUyZTNhMTAxNjE1MjMxOTZjM2E4YTkxNmY4YmM5NGMyZGQxM2ZkMDMzZWYwZTAzYzgwMDRlYWVmNzMwOHx7InJlbW90ZV9hZGRyZXNzIjoiMTQxLjIxMy4xNzMuNzEiLCJyZXF1ZXN0X2lkIjoiQzY1NjoyMUEwMzoyRkQwRjkwOjRFREM1MTY6NUE4QjAwQjYiLCJ0aW1lc3RhbXAiOjE1MTkwNTkxMjYsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_HERO_CARD_UPLOADER,MARKETPLACE_INSIGHTS,MARKETPLACE_INSIGHTS_CONVERSION_PERCENTAGES">

  <meta name="html-safe-nonce" content="f50aa8f8acd6ad7becd6ca71fb275768f7627d88">

  <meta http-equiv="x-pjax-version" content="cf966a7bd53b7caccaa5d1c3fd748501">
  

      <link href="https://github.com/pcooksey/bibtex-js/commits/master.atom" rel="alternate" title="Recent Commits to bibtex-js:master" type="application/atom+xml">

  <meta name="description" content="bibtex-js - BibTeX-js can parse a BibTeX-file and render it as part of an HTML file. This way, you can easily add a list of publications to your private homepage or display a list of recommended publications for a seminar. The way the entries are display can be customized using a simple template system and CSS.">
  <meta name="go-import" content="github.com/pcooksey/bibtex-js git https://github.com/pcooksey/bibtex-js.git">

  <meta content="1790570" name="octolytics-dimension-user_id" /><meta content="pcooksey" name="octolytics-dimension-user_login" /><meta content="39153529" name="octolytics-dimension-repository_id" /><meta content="pcooksey/bibtex-js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="39153529" name="octolytics-dimension-repository_network_root_id" /><meta content="pcooksey/bibtex-js" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/pcooksey/bibtex-js/blob/master/src/bibtex_js.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

<link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        <header class="Header header-logged-out  position-relative f4 py-3" role="banner">
  <div class="container-lg d-flex px-3">
    <div class="d-flex flex-justify-between flex-items-center">
      <a class="header-logo-invertocat my-0" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
        <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
      </a>

    </div>

    <div class="HeaderMenu HeaderMenu--bright d-flex flex-justify-between flex-auto">
        <nav class="mt-0">
          <ul class="d-flex list-style-none">
              <li class="ml-2">
                <a href="/features" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features/project-management /features/code-review /features/project-management /features/integrations /features">
                  Features
</a>              </li>
              <li class="ml-4">
                <a href="/business" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business">
                  Business
</a>              </li>

              <li class="ml-4">
                <a href="/explore" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore">
                  Explore
</a>              </li>

              <li class="ml-4">
                    <a href="/marketplace" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace">
                      Marketplace
</a>              </li>
              <li class="ml-4">
                <a href="/pricing" class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing">
                  Pricing
</a>              </li>
          </ul>
        </nav>

      <div class="d-flex">
          <div class="d-lg-flex flex-items-center mr-3">
            <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/pcooksey/bibtex-js/search" class="js-site-search-form" data-scoped-search-url="/pcooksey/bibtex-js/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/pcooksey/bibtex-js/blob/master/src/bibtex_js.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>

          </div>

        <span class="d-inline-block">
            <div class="HeaderNavlink px-0 py-2 m-0">
              <a class="text-bold text-white no-underline" href="/login?return_to=%2Fpcooksey%2Fbibtex-js%2Fblob%2Fmaster%2Fsrc%2Fbibtex_js.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
                <span class="text-gray">or</span>
                <a class="text-bold text-white no-underline" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
            </div>
        </span>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main" class="application-main ">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      







  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Fpcooksey%2Fbibtex-js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/pcooksey/bibtex-js/watchers"
     aria-label="5 users are watching this repository">
    5
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fpcooksey%2Fbibtex-js"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/pcooksey/bibtex-js/stargazers"
      aria-label="33 users starred this repository">
      33
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fpcooksey%2Fbibtex-js"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/pcooksey/bibtex-js/network" class="social-count"
       aria-label="18 users forked this repository">
      18
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/pcooksey" class="url fn" rel="author">pcooksey</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/pcooksey/bibtex-js" data-pjax="#js-repo-pjax-container">bibtex-js</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/pcooksey/bibtex-js" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /pcooksey/bibtex-js" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/pcooksey/bibtex-js/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /pcooksey/bibtex-js/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">8</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/pcooksey/bibtex-js/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls checks /pcooksey/bibtex-js/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">2</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/pcooksey/bibtex-js/projects" class="js-selected-navigation-item reponav-item" data-hotkey="g b" data-selected-links="repo_projects new_repo_project repo_project /pcooksey/bibtex-js/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>
    <a href="/pcooksey/bibtex-js/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /pcooksey/bibtex-js/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a href="/pcooksey/bibtex-js/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /pcooksey/bibtex-js/pulse">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
  <a href="/pcooksey/bibtex-js/blob/237827702ea39190c5094df2d8866b2c46748f37/src/bibtex_js.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:c16f906f0711abc8cc0b3937e2f533b5 -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/pcooksey/bibtex-js/blob/academicstyle/src/bibtex_js.js"
               data-name="academicstyle"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                academicstyle
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/pcooksey/bibtex-js/blob/limitBibtexDisplay/src/bibtex_js.js"
               data-name="limitBibtexDisplay"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                limitBibtexDisplay
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/pcooksey/bibtex-js/blob/linkedAuthors/src/bibtex_js.js"
               data-name="linkedAuthors"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                linkedAuthors
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/pcooksey/bibtex-js/blob/master/src/bibtex_js.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/pcooksey/bibtex-js/blob/topicsearch/src/bibtex_js.js"
               data-name="topicsearch"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                topicsearch
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/pcooksey/bibtex-js/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/pcooksey/bibtex-js" data-pjax="true"><span>bibtex-js</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/pcooksey/bibtex-js/tree/master/src" data-pjax="true"><span>src</span></a></span><span class="separator">/</span><strong class="final-path">bibtex_js.js</strong>
    </div>
  </div>


  
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/pcooksey/bibtex-js/commit/f2457a43ec6a4404cbb0b713a67206017533f7ba" data-pjax>
          f2457a4
        </a>
        <relative-time datetime="2017-06-21T17:56:59Z">Jun 21, 2017</relative-time>
      </span>
      <div>
        <img alt="@pcooksey" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1790570?s=40&amp;v=4" width="20" />
        <a href="/pcooksey" class="user-mention" rel="author">pcooksey</a>
          
<span aria-label="This commit closes issue #10." class="issue-keyword tooltipped tooltipped-se"><a href="/pcooksey/bibtex-js/commit/f2457a43ec6a4404cbb0b713a67206017533f7ba" class="message" data-pjax="true" title="Fixes #10">Fixes</a></span> <a href="https://github.com/pcooksey/bibtex-js/issues/10" class="issue-link js-issue-link" data-error-text="Failed to load issue title" data-id="236352639" data-permission-text="Issue title is private" data-url="https://github.com/pcooksey/bibtex-js/issues/10">#10</a>

      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>1</strong>
         contributor
      </button>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@pcooksey" height="24" src="https://avatars1.githubusercontent.com/u/1790570?s=48&amp;v=4" width="24" />
            <a href="/pcooksey">pcooksey</a>
          </li>
      </ul>
    </div>
  </div>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/pcooksey/bibtex-js/raw/master/src/bibtex_js.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/pcooksey/bibtex-js/blame/master/src/bibtex_js.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/pcooksey/bibtex-js/commits/master/src/bibtex_js.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://desktop.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      923 lines (838 sloc)
      <span class="file-info-divider"></span>
    83.3 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span> </span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Author = Philip Cooksey</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Edited = July 2015</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Website = https://github.com/pcooksey/bibtex-js</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Credit = Henrik Mühe</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Issues:</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*  no comment handling within strings</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*  no string concatenation</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*  no variable values yet</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c">* Grammar implemented here:</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*  bibtex -&gt; (string | preamble | comment | entry)*;</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*  string -&gt; &#39;@STRING&#39; &#39;{&#39; key_equals_value &#39;}&#39;;</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*  preamble -&gt; &#39;@PREAMBLE&#39; &#39;{&#39; value &#39;}&#39;;</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*  comment -&gt; &#39;@COMMENT&#39; &#39;{&#39; value &#39;}&#39;;</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*  entry -&gt; &#39;@&#39; key &#39;{&#39; key &#39;,&#39; key_value_list &#39;}&#39;;</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*  key_value_list -&gt; key_equals_value (&#39;,&#39; key_equals_value)*;</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*  key_equals_value -&gt; key &#39;=&#39; value;</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*  value -&gt; value_quotes | value_braces | key;</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*  value_quotes -&gt; &#39;&quot;&#39; .*? &#39;&quot;&#39;; // not quite</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*  value_braces -&gt; &#39;{&#39; .*? &#39;&quot;&#39;; // not quite</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">BibtexParser</span>() {</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">pos</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-c1">input</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">entries</span> <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">strings</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">JAN</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>January<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">FEB</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>February<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">MAR</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>March<span class="pl-pds">&quot;</span></span>,      </td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">APR</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>April<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">MAY</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>May<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">JUN</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>June<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">JUL</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>July<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">AUG</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>August<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">SEP</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>September<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">OCT</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>October<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">NOV</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>November<span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">DEC</span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>December<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">currentKey</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">rawCurrentKey</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">currentEntry</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">setInput</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">t</span>) {</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-c1">input</span> <span class="pl-k">=</span> t;</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">getEntries</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">entries</span>;</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">getBibTexRaw</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">  	<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">bibtexraw</span>;</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">errorThrown</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">str</span>) {</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#bibtex_errors<span class="pl-pds">&quot;</span></span>).<span class="pl-en">html</span>(str);</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">isWhitespace</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>) {</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> (s <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> s <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\r</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> s <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\t</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> s <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">match</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>) {</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">skipWhitespace</span>();</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">input</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">this</span>.<span class="pl-smi">pos</span>, <span class="pl-c1">this</span>.<span class="pl-smi">pos</span><span class="pl-k">+</span><span class="pl-smi">s</span>.<span class="pl-c1">length</span>) <span class="pl-k">==</span> s) {</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">pos</span> <span class="pl-k">+=</span> <span class="pl-smi">s</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">throw</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Token mismatch, expected <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> s <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>, found <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-c1">input</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">this</span>.<span class="pl-smi">pos</span>);</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">skipWhitespace</span>();</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">tryMatch</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">s</span>) {</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">skipWhitespace</span>();</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">input</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">this</span>.<span class="pl-smi">pos</span>, <span class="pl-c1">this</span>.<span class="pl-smi">pos</span><span class="pl-k">+</span><span class="pl-smi">s</span>.<span class="pl-c1">length</span>) <span class="pl-k">==</span> s) {</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">skipWhitespace</span>();</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">skipWhitespace</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span> (<span class="pl-c1">this</span>.<span class="pl-en">isWhitespace</span>(<span class="pl-c1">this</span>.<span class="pl-c1">input</span>[<span class="pl-c1">this</span>.<span class="pl-smi">pos</span>])) {</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">pos</span><span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">input</span>[<span class="pl-c1">this</span>.<span class="pl-smi">pos</span>] <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">while</span>(<span class="pl-c1">this</span>.<span class="pl-c1">input</span>[<span class="pl-c1">this</span>.<span class="pl-smi">pos</span>] <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">pos</span><span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-en">skipWhitespace</span>();</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">value_braces</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> bracecount <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>{<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> start <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">pos</span>;</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span>(<span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">input</span>[<span class="pl-c1">this</span>.<span class="pl-smi">pos</span>] <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>}<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">this</span>.<span class="pl-c1">input</span>[<span class="pl-c1">this</span>.<span class="pl-smi">pos</span><span class="pl-k">-</span><span class="pl-c1">1</span>] <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span><span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (bracecount <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">          bracecount<span class="pl-k">--</span>;</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> end <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">pos</span>;</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">this</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>}<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">input</span>.<span class="pl-c1">substring</span>(start, end);</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">input</span>[<span class="pl-c1">this</span>.<span class="pl-smi">pos</span>] <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>{<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">        bracecount<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">pos</span> <span class="pl-k">==</span> <span class="pl-c1">this</span>.<span class="pl-c1">input</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">throw</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Unterminated value<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">pos</span><span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">value_quotes</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">  	<span class="pl-k">var</span> bracecount <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> start <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">pos</span>;</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span>(<span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">input</span>[<span class="pl-c1">this</span>.<span class="pl-smi">pos</span>] <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">this</span>.<span class="pl-c1">input</span>[<span class="pl-c1">this</span>.<span class="pl-smi">pos</span><span class="pl-k">-</span><span class="pl-c1">1</span>] <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-cce">\\</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> bracecount <span class="pl-k">==</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> end <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">pos</span>;</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">this</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-c1">input</span>.<span class="pl-c1">substring</span>(start, end);</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">input</span>[<span class="pl-c1">this</span>.<span class="pl-smi">pos</span>] <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>{<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">      	bracecount<span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">input</span>[<span class="pl-c1">this</span>.<span class="pl-smi">pos</span>] <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>}<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">      	<span class="pl-k">if</span> (bracecount <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">          bracecount<span class="pl-k">--</span>;</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">pos</span> <span class="pl-k">==</span> <span class="pl-c1">this</span>.<span class="pl-c1">input</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">throw</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Unterminated value:<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-c1">input</span>.<span class="pl-c1">substring</span>(start);</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">pos</span><span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">single_value</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> start <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">pos</span>;</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-en">tryMatch</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>{<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">value_braces</span>();</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-en">tryMatch</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&quot;<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">value_quotes</span>();</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> k <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">key</span>();</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">strings</span>[<span class="pl-smi">k</span>.<span class="pl-c1">toUpperCase</span>()]) {</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">strings</span>[k];</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">k</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>^[0-9]+$<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> k;</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">throw</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Value expected:<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-c1">input</span>.<span class="pl-c1">substring</span>(start);</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">value</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> values <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">values</span>.<span class="pl-c1">push</span>(<span class="pl-c1">this</span>.<span class="pl-en">single_value</span>());</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span> (<span class="pl-c1">this</span>.<span class="pl-en">tryMatch</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">values</span>.<span class="pl-c1">push</span>(<span class="pl-c1">this</span>.<span class="pl-en">single_value</span>());</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">values</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">key</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> start <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">pos</span>;</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span>(<span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">pos</span> <span class="pl-k">==</span> <span class="pl-c1">this</span>.<span class="pl-c1">input</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">throw</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Runaway key<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-c1">input</span>[<span class="pl-c1">this</span>.<span class="pl-smi">pos</span>].<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>[a-zA-Z0-9_:?<span class="pl-cce">\\</span>./&#39;<span class="pl-cce">\\</span>+<span class="pl-cce">\\</span>-<span class="pl-cce">\\</span>*]<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">pos</span><span class="pl-k">++</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">      	<span class="pl-c1">this</span>.<span class="pl-smi">rawCurrentKey</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">input</span>.<span class="pl-c1">substring</span>(start, <span class="pl-c1">this</span>.<span class="pl-smi">pos</span>);</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">rawCurrentKey</span>.<span class="pl-c1">toUpperCase</span>();</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">key_equals_value</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> key <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">key</span>();</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-en">tryMatch</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>=<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>=<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> val <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">value</span>();</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> [ key, val ];</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">throw</span> <span class="pl-s"><span class="pl-pds">&quot;</span>... = value expected, equals sign missing:<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-c1">input</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">this</span>.<span class="pl-smi">pos</span>);</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">key_value_list</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> kv <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">key_equals_value</span>();</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">entries</span>[<span class="pl-c1">this</span>.<span class="pl-smi">currentEntry</span>][kv[<span class="pl-c1">0</span>]] <span class="pl-k">=</span> kv[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span> (<span class="pl-c1">this</span>.<span class="pl-en">tryMatch</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> fixes problems with commas at the end of a list</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-en">tryMatch</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>}<span class="pl-pds">&quot;</span></span>) <span class="pl-k">||</span> <span class="pl-c1">this</span>.<span class="pl-en">tryMatch</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">      kv <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">key_equals_value</span>();</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">entries</span>[<span class="pl-c1">this</span>.<span class="pl-smi">currentEntry</span>][kv[<span class="pl-c1">0</span>]] <span class="pl-k">=</span> kv[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">entry_body</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">directive</span>) {</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">currentEntry</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">key</span>();</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">entries</span>[<span class="pl-c1">this</span>.<span class="pl-smi">currentEntry</span>] <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Object</span>();</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">entries</span>[<span class="pl-c1">this</span>.<span class="pl-smi">currentEntry</span>][<span class="pl-s"><span class="pl-pds">&quot;</span>BIBTEXKEY<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">rawCurrentKey</span>;</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (directive <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>@INCOLLECTION<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">entries</span>[<span class="pl-c1">this</span>.<span class="pl-smi">currentEntry</span>][<span class="pl-s"><span class="pl-pds">&quot;</span>BIBTEXTYPE<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>book chapter<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">	} <span class="pl-k">else</span> <span class="pl-k">if</span> (directive <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>@INPROCEEDINGS<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">	  <span class="pl-c1">this</span>.<span class="pl-smi">entries</span>[<span class="pl-c1">this</span>.<span class="pl-smi">currentEntry</span>][<span class="pl-s"><span class="pl-pds">&quot;</span>BIBTEXTYPE<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>conference, workshop<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">	} <span class="pl-k">else</span> <span class="pl-k">if</span> (directive <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>@ARTICLE<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">	  <span class="pl-c1">this</span>.<span class="pl-smi">entries</span>[<span class="pl-c1">this</span>.<span class="pl-smi">currentEntry</span>][<span class="pl-s"><span class="pl-pds">&quot;</span>BIBTEXTYPE<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>journal<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">	} <span class="pl-k">else</span> <span class="pl-k">if</span> (directive <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>@TECHREPORT<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">	  <span class="pl-c1">this</span>.<span class="pl-smi">entries</span>[<span class="pl-c1">this</span>.<span class="pl-smi">currentEntry</span>][<span class="pl-s"><span class="pl-pds">&quot;</span>BIBTEXTYPE<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>technical report<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">	}   </td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">key_value_list</span>();</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">directive</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>@<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>@<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-c1">key</span>();</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">string</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> kv <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">key_equals_value</span>();</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">strings</span>[kv[<span class="pl-c1">0</span>].<span class="pl-c1">toUpperCase</span>()] <span class="pl-k">=</span> kv[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">preamble</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-c1">value</span>();</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">comment</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">pos</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">input</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>}<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">this</span>.<span class="pl-smi">pos</span>);</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">entry</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">directive</span>) {</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-en">entry_body</span>(directive);</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">bibtex</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> start <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> end <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">while</span>(<span class="pl-c1">this</span>.<span class="pl-en">tryMatch</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>@<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">      start <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">pos</span>;</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> d <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">directive</span>().<span class="pl-c1">toUpperCase</span>();</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-en">tryMatch</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>{<span class="pl-pds">&quot;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">this</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>{<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">      	<span class="pl-c1">this</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (d <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>@STRING<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">string</span>();</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (d <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>@PREAMBLE<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">preamble</span>();</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span> (d <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>@COMMENT<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">comment</span>();</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-en">entry</span>(d);</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">      end <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">pos</span><span class="pl-k">+</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-en">tryMatch</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>}<span class="pl-pds">&quot;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">this</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>}<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">      	<span class="pl-c1">this</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-en">tryMatch</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">this</span>.<span class="pl-c1">match</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>,<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> In case there is extra stuff in between entries</span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">pos</span> <span class="pl-k">=</span> end <span class="pl-k">+</span> <span class="pl-c1">this</span>.<span class="pl-c1">input</span>.<span class="pl-c1">substring</span>(end,<span class="pl-c1">this</span>.<span class="pl-c1">input</span>.<span class="pl-c1">length</span>).<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>@<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-smi">entries</span>[<span class="pl-c1">this</span>.<span class="pl-smi">currentEntry</span>][<span class="pl-s"><span class="pl-pds">&quot;</span>BIBTEXRAW<span class="pl-pds">&quot;</span></span>] <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">input</span>.<span class="pl-c1">substring</span>(start,end);</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">BibtexDisplay</span>() {</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">invert</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> new_obj <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> prop <span class="pl-k">in</span> obj) {</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span>(<span class="pl-smi">obj</span>.<span class="pl-en">hasOwnProperty</span>(prop)) {</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">        new_obj[obj[prop]] <span class="pl-k">=</span> prop;</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> new_obj;</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">function</span> <span class="pl-en">isSymbol</span>(<span class="pl-smi">str</span>) {</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">str</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">str</span>.<span class="pl-c1">test</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-c1">\W</span>]</span><span class="pl-pds">/</span>i</span>);</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span>Regex Searchs used by fixValue in proper order</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">regExps</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">regExps</span>.<span class="pl-c1">push</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\{\\\\\\</span>W*<span class="pl-cce">\\</span>w+<span class="pl-cce">\}</span><span class="pl-pds">&quot;</span></span>)); <span class="pl-c"><span class="pl-c">//</span> 1 {\[]}</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">regExps</span>.<span class="pl-c1">push</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\\\\\</span>W*<span class="pl-cce">\{\\</span>w+<span class="pl-cce">\}</span><span class="pl-pds">&quot;</span></span>)); <span class="pl-c"><span class="pl-c">//</span> 2 \[]{\[]}</span></td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">regExps</span>.<span class="pl-c1">push</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\\\\\</span>W*<span class="pl-cce">\\</span>w+<span class="pl-cce">\\</span>s<span class="pl-pds">&quot;</span></span>)); <span class="pl-c"><span class="pl-c">//</span> 3 \[]</span></td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">regExps</span>.<span class="pl-c1">push</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\\\\\</span>W*<span class="pl-cce">\\</span>w+<span class="pl-pds">&quot;</span></span>)); <span class="pl-c"><span class="pl-c">//</span> 4 \[]</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">regExps</span>.<span class="pl-c1">push</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\\\</span>(?![:<span class="pl-cce">\\\\\]</span>)<span class="pl-cce">\\</span>W{1}<span class="pl-pds">&quot;</span></span>)); <span class="pl-c"><span class="pl-c">//</span> 5</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">fixValue</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">do</span> {</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> removeBrackets <span class="pl-k">=</span> <span class="pl-smi">value</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\{</span>(<span class="pl-c1">.</span><span class="pl-k">*?</span>)<span class="pl-cce">\}</span><span class="pl-k">$</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$1<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span>(removeBrackets)</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">      {</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">        value <span class="pl-k">=</span> <span class="pl-smi">value</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span><span class="pl-cce">\{</span>(<span class="pl-c1">.</span><span class="pl-k">*?</span>)<span class="pl-cce">\}</span><span class="pl-k">$</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>$1<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">    }<span class="pl-k">while</span>(removeBrackets);</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Working on a more efficient way of processing the latex</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> index <span class="pl-k">=</span> <span class="pl-smi">value</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\\</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(index <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span>(<span class="pl-k">var</span> exp <span class="pl-k">in</span> <span class="pl-c1">this</span>.<span class="pl-smi">regExps</span>) {</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">do</span> {</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> str <span class="pl-k">=</span> <span class="pl-smi">value</span>.<span class="pl-c1">match</span>(<span class="pl-c1">this</span>.<span class="pl-smi">regExps</span>[exp]);</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> key <span class="pl-k">=</span> (str)<span class="pl-k">?</span>str[<span class="pl-c1">0</span>]<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span>(str) {</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-k">typeof</span>(latex_to_unicode[key]) <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">            {</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">              value <span class="pl-k">=</span> <span class="pl-smi">value</span>.<span class="pl-c1">replace</span>(key,latex_to_unicode[key]);</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">var</span> newkey <span class="pl-k">=</span> <span class="pl-smi">key</span>.<span class="pl-c1">replace</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>(<span class="pl-cce">\\</span>w)<span class="pl-pds">&quot;</span></span>), <span class="pl-s"><span class="pl-pds">&#39;</span>{$1}<span class="pl-pds">&#39;</span></span>)</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span>(<span class="pl-k">typeof</span>(latex_to_unicode[newkey]) <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">              {</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">                value <span class="pl-k">=</span> <span class="pl-smi">value</span>.<span class="pl-c1">replace</span>(key,latex_to_unicode[newkey]);</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">              } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">                str <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">            str <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">while</span>(<span class="pl-smi">str</span>.<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">    value <span class="pl-k">=</span> <span class="pl-smi">value</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[<span class="pl-cce">\{</span>|<span class="pl-cce">\}</span>]</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> value;</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">displayAuthor</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">string</span>){</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">  	string <span class="pl-k">=</span> <span class="pl-smi">string</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[ ]</span><span class="pl-k">*</span><span class="pl-c1">[<span class="pl-c1">\n\t</span>][ ]</span><span class="pl-k">*</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">  	string <span class="pl-k">=</span> <span class="pl-smi">string</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-c1">[ ]</span><span class="pl-k">+</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">  	<span class="pl-k">var</span> arrayString <span class="pl-k">=</span> <span class="pl-smi">string</span>.<span class="pl-c1">split</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>[<span class="pl-cce">\\</span>s]+and[<span class="pl-cce">\\</span>s]+<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">  	<span class="pl-k">var</span> newString <span class="pl-k">=</span> arrayString[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">  	<span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">1</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">arrayString</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">  	  <span class="pl-k">if</span>(i<span class="pl-k">+</span><span class="pl-c1">1</span><span class="pl-k">&gt;=</span><span class="pl-smi">arrayString</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">  	    newString <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>, and <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> arrayString[i];</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">  	  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">	    newString <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>, <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> arrayString[i];</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">	  }</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">return</span> newString;</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">createTemplate</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">entry</span>){</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> find template</span></td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> tpl <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.bibtex_template<span class="pl-pds">&quot;</span></span>).<span class="pl-en">clone</span>().<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bibtex_template<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> find all keys in the entry</span></td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> keys <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> key <span class="pl-k">in</span> entry) {</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">keys</span>.<span class="pl-c1">push</span>(<span class="pl-smi">key</span>.<span class="pl-c1">toUpperCase</span>());</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> find all ifs and check them</span></td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> removed <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">do</span> {</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> find next if</span></td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> conds <span class="pl-k">=</span> <span class="pl-smi">tpl</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.if<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-smi">conds</span>.<span class="pl-c1">size</span>() <span class="pl-k">==</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">      </td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> check if</span></td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> cond <span class="pl-k">=</span> <span class="pl-smi">conds</span>.<span class="pl-en">first</span>();</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">cond</span>.<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>if<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> ifTrue <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> classList <span class="pl-k">=</span> <span class="pl-smi">cond</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">$</span>.<span class="pl-en">each</span>( classList, <span class="pl-k">function</span>(<span class="pl-smi">index</span>, <span class="pl-smi">cls</span>){</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">      	<span class="pl-k">if</span>(cls[<span class="pl-c1">0</span>]<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>!<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">      	   <span class="pl-smi">keys</span>.<span class="pl-c1">indexOf</span>(<span class="pl-smi">cls</span>.<span class="pl-c1">substring</span>(<span class="pl-c1">1</span>,<span class="pl-smi">cls</span>.<span class="pl-c1">length</span>).<span class="pl-c1">toUpperCase</span>()) <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">	      ifTrue <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">      	}</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">keys</span>.<span class="pl-c1">indexOf</span>(<span class="pl-smi">cls</span>.<span class="pl-c1">toUpperCase</span>()) <span class="pl-k">&lt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">          ifTrue <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">cond</span>.<span class="pl-en">removeClass</span>(cls);</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">      </td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> remove false ifs</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-k">!</span>ifTrue) {</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">cond</span>.<span class="pl-c1">remove</span>();</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">while</span> (<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">tpl</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.bibtexVar<span class="pl-pds">&#39;</span></span>).<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> key <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-c1">attributes</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>extra<span class="pl-pds">&quot;</span></span>].<span class="pl-c1">value</span>;</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">	  <span class="pl-smi">$</span>.<span class="pl-en">each</span>(<span class="pl-c1">this</span>.<span class="pl-c1">attributes</span>, <span class="pl-k">function</span>(<span class="pl-smi">i</span>, <span class="pl-smi">attrib</span>){</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">	     <span class="pl-k">var</span> value <span class="pl-k">=</span> <span class="pl-smi">attrib</span>.<span class="pl-c1">value</span>;</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">	     value <span class="pl-k">=</span> <span class="pl-smi">value</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\+</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>key<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\+</span><span class="pl-pds">&quot;</span></span>, entry[key]);</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">	     <span class="pl-smi">attrib</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> value;</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">	  });</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">	});</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> fill in remaining fields </span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (<span class="pl-k">var</span> index <span class="pl-k">in</span> keys) {</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> key <span class="pl-k">=</span> keys[index];</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> value <span class="pl-k">=</span> entry[key] <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span>(key<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>BIBTEXRAW<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">tpl</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">key</span>.<span class="pl-c1">toLowerCase</span>()).<span class="pl-en">html</span>(value);</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span>(key<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>AUTHOR<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">tpl</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>span:not(a).<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">key</span>.<span class="pl-c1">toLowerCase</span>()).<span class="pl-en">html</span>(<span class="pl-c1">this</span>.<span class="pl-en">displayAuthor</span>(<span class="pl-c1">this</span>.<span class="pl-en">fixValue</span>(value)));</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> <span class="pl-k">if</span>(key<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>PAGES<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">        value <span class="pl-k">=</span> <span class="pl-smi">value</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>--<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span>)</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">tpl</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">key</span>.<span class="pl-c1">toLowerCase</span>()).<span class="pl-en">html</span>(value);</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">tpl</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>span:not(a).<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">key</span>.<span class="pl-c1">toLowerCase</span>()).<span class="pl-en">html</span>(<span class="pl-c1">this</span>.<span class="pl-en">fixValue</span>(value));</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> link <span class="pl-k">=</span> <span class="pl-smi">tpl</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>a.<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">key</span>.<span class="pl-c1">toLowerCase</span>()).<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">	        <span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-c1">attributes</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>href<span class="pl-pds">&quot;</span></span>] <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">			      <span class="pl-c1">this</span>.<span class="pl-c1">attributes</span>[<span class="pl-s"><span class="pl-pds">&quot;</span>href<span class="pl-pds">&quot;</span></span>].<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">fixValue</span>(value);</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">			    }</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">		    });</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">tpl</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>bibtexentry<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> tpl;</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">createArray</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">entries</span>) {</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> entriesArray <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span>(<span class="pl-k">var</span> entryKey <span class="pl-k">in</span> entries) {</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">entriesArray</span>.<span class="pl-c1">push</span>(entries[entryKey]);</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> entriesArray;</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">sortArray</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">array</span>, <span class="pl-smi">key</span>, <span class="pl-smi">rule</span>, <span class="pl-smi">type</span>) {</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> keyUpper <span class="pl-k">=</span> <span class="pl-smi">key</span>.<span class="pl-c1">toUpperCase</span>();</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">    array <span class="pl-k">=</span> <span class="pl-smi">array</span>.<span class="pl-c1">sort</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>,<span class="pl-smi">b</span>) { </td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> aValue <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>, bValue <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Need to check if values exist</span></td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">      aValue <span class="pl-k">=</span> (keyUpper <span class="pl-k">in</span> a) <span class="pl-k">?</span>  a[keyUpper] <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>; </td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">      bValue <span class="pl-k">=</span> (keyUpper <span class="pl-k">in</span> b) <span class="pl-k">?</span>  b[keyUpper] <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>; </td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">switch</span>(<span class="pl-smi">rule</span>.<span class="pl-c1">toUpperCase</span>()) {</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>DESC<span class="pl-pds">&quot;</span></span>:</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">//</span>Values remain the same</span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>ASC<span class="pl-pds">&quot;</span></span>:</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">//</span>Just swaping the values</span></td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> tmp <span class="pl-k">=</span> bValue; bValue <span class="pl-k">=</span> aValue; aValue <span class="pl-k">=</span> tmp;</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">default</span>: </td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-c1">0</span>; <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">switch</span>(<span class="pl-smi">type</span>.<span class="pl-c1">toLowerCase</span>()) {</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span>:</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-smi">bValue</span>.<span class="pl-c1">toUpperCase</span>().<span class="pl-en">localeCompare</span>(<span class="pl-smi">aValue</span>.<span class="pl-c1">toUpperCase</span>()); <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>number<span class="pl-pds">&quot;</span></span>:</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-c1">parseInt</span>(aValue) <span class="pl-k">-</span> <span class="pl-c1">parseInt</span>(bValue); <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">default</span>:</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-c1">0</span>; <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> array;</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">createStructure</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">structure</span>, <span class="pl-smi">output</span>, <span class="pl-smi">entries</span>, <span class="pl-smi">level</span>) {</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> MissingGroup <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Other Publications<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span>Used during the search</span></td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">    level <span class="pl-k">=</span> level <span class="pl-k">||</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> struct <span class="pl-k">=</span> <span class="pl-smi">structure</span>.<span class="pl-en">clone</span>().<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bibtex_structure<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> groupChild <span class="pl-k">=</span> <span class="pl-smi">struct</span>.<span class="pl-en">children</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.group<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> sortChild <span class="pl-k">=</span> <span class="pl-smi">struct</span>.<span class="pl-en">children</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.sort<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">groupChild</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> group <span class="pl-k">=</span> <span class="pl-smi">groupChild</span>.<span class="pl-en">first</span>();</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> groupName <span class="pl-k">=</span> <span class="pl-smi">group</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">1</span>].<span class="pl-c1">toUpperCase</span>();</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> rule <span class="pl-k">=</span> <span class="pl-smi">group</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>extra<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> type <span class="pl-k">=</span> <span class="pl-smi">group</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>extra<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">      </td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span>Sort the array based on group rules</span></td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> sortedArray <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">sortArray</span>(entries, groupName, rule, type);</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">      </td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Get all the unique values for the groups</span></td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> values <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">$</span>.<span class="pl-en">each</span>(sortedArray, <span class="pl-k">function</span>(<span class="pl-smi">i</span>, <span class="pl-smi">object</span>) { </td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span>(groupName <span class="pl-k">in</span> object <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">$</span>.<span class="pl-en">inArray</span>(object[groupName],values)<span class="pl-k">===</span><span class="pl-k">-</span><span class="pl-c1">1</span>){    </td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">values</span>.<span class="pl-c1">push</span>(object[groupName]);</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">values</span>.<span class="pl-c1">push</span>(MissingGroup); <span class="pl-c"><span class="pl-c">//</span>This is for checking none grouped publications</span></td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">      </td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span>Get the bibtex topics html here.</span></td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> topics <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.bibtex_topics<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Iterate through the values and recurively call this function</span></td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">      globalStruct <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span>( val <span class="pl-k">in</span> values) {</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span>Starting to create the page</span></td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> newStruct <span class="pl-k">=</span> <span class="pl-smi">struct</span>.<span class="pl-en">clone</span>();</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> groupNameValue <span class="pl-k">=</span> values[val];</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span>Add the header for the group</span></td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">newStruct</span>.<span class="pl-en">children</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">groupName</span>.<span class="pl-c1">toLowerCase</span>()).<span class="pl-en">first</span>().<span class="pl-c1">prepend</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;h<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>(level<span class="pl-k">+</span><span class="pl-c1">1</span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span> class=&#39;<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">                              <span class="pl-k">+</span>groupName<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&#39; id=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>groupNameValue<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span>&gt;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-c1">this</span>.<span class="pl-en">fixValue</span>(groupNameValue)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/h<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>(level<span class="pl-k">+</span><span class="pl-c1">1</span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>&gt;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span>Divide the array into group with groupNameValue</span></td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">        splicedArray <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">grep</span>(sortedArray, <span class="pl-k">function</span>(<span class="pl-smi">object</span>, <span class="pl-smi">i</span>) { </td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(groupNameValue<span class="pl-k">==</span>MissingGroup) {</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">return</span> (<span class="pl-k">typeof</span> object[groupName] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>)<span class="pl-k">?</span><span class="pl-c1">true</span><span class="pl-k">:</span><span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">return</span> object[groupName] <span class="pl-k">==</span> groupNameValue;</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">          </td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(<span class="pl-smi">splicedArray</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">//</span>Add the topic value to the topics structure if it exists on the page</span></td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span>(<span class="pl-smi">topics</span>.<span class="pl-c1">length</span> <span class="pl-k">&amp;&amp;</span> level<span class="pl-k">==</span><span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">topics</span>.<span class="pl-c1">append</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> - &lt;a href=<span class="pl-cce">\&quot;</span>#<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>groupNameValue<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span>&gt; <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>groupNameValue<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span> &lt;/a&gt;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">//</span> Get back the struct to add to the page</span></td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> tempStruct <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">createStructure</span>(<span class="pl-smi">groupChild</span>.<span class="pl-en">clone</span>(), output, splicedArray, level<span class="pl-k">+</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span>(<span class="pl-smi">groupChild</span>.<span class="pl-en">children</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.group<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">            nextGroupName <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">groupChild</span>.<span class="pl-en">children</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.group<span class="pl-pds">&quot;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">newStruct</span>.<span class="pl-c1">find</span>(nextGroupName).<span class="pl-c1">replaceWith</span>(<span class="pl-smi">tempStruct</span>.<span class="pl-c1">find</span>(nextGroupName));</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">newStruct</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.templates<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">append</span>(<span class="pl-smi">tempStruct</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.templates<span class="pl-pds">&quot;</span></span>).<span class="pl-en">html</span>());</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span>(level<span class="pl-k">==</span><span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">output</span>.<span class="pl-c1">append</span>(newStruct);</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">globalStruct</span>.<span class="pl-c1">append</span>(newStruct);</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span>(level<span class="pl-k">==</span><span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> output;</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> globalStruct;</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">sortChild</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> sortName <span class="pl-k">=</span> <span class="pl-smi">sortChild</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>class<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">1</span>].<span class="pl-c1">toUpperCase</span>();</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> rule <span class="pl-k">=</span> <span class="pl-smi">sortChild</span>.<span class="pl-en">first</span>().<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>extra<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> type <span class="pl-k">=</span> <span class="pl-smi">sortChild</span>.<span class="pl-en">first</span>().<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>extra<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>)[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">      </td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> sort <span class="pl-k">=</span> <span class="pl-smi">structure</span>.<span class="pl-en">children</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.sort<span class="pl-pds">&quot;</span></span>).<span class="pl-en">first</span>().<span class="pl-en">clone</span>();</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span>Sort the array based on sort rules</span></td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> sortedArray <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">sortArray</span>(entries, sortName, rule, type);</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span>(level<span class="pl-k">==</span><span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">output</span>.<span class="pl-c1">append</span>(<span class="pl-c1">this</span>.<span class="pl-en">createStructure</span>(sortChild, output, sortedArray, level<span class="pl-k">+</span><span class="pl-c1">1</span>));</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-en">createStructure</span>(sortChild, output, sortedArray, level<span class="pl-k">+</span><span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> iterate over bibTeX entries and add them to template</span></td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> entryKey <span class="pl-k">in</span> entries) {</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> entry <span class="pl-k">=</span> entries[entryKey];</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Checking if web is set to visible</span></td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span>(<span class="pl-k">!</span>entry[<span class="pl-s"><span class="pl-pds">&quot;</span>WEB<span class="pl-pds">&quot;</span></span>] <span class="pl-k">||</span> entry[<span class="pl-s"><span class="pl-pds">&quot;</span>WEB<span class="pl-pds">&quot;</span></span>].<span class="pl-c1">toUpperCase</span>()<span class="pl-k">!=</span><span class="pl-s"><span class="pl-pds">&quot;</span>NO<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">	        <span class="pl-k">var</span> tpl <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">createTemplate</span>(entry);</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">	        <span class="pl-smi">structure</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.templates<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">append</span>(tpl);</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">	        <span class="pl-smi">tpl</span>.<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">       	}</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> structure;</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">displayBibtex</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">input</span>, <span class="pl-smi">output</span>) {</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> parse bibtex input</span></td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> b <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">BibtexParser</span>();</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">b</span>.<span class="pl-en">setInput</span>(input);</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">b</span>.<span class="pl-en">bibtex</span>();</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> entries <span class="pl-k">=</span> <span class="pl-smi">b</span>.<span class="pl-en">getEntries</span>();</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> save old entries to remove them later</span></td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> old <span class="pl-k">=</span> <span class="pl-smi">output</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>*<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">    </td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> structure <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.bibtex_structure<span class="pl-pds">&quot;</span></span>).<span class="pl-en">clone</span>();</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> If structure exists we need to do more complicated sorting with entries</span></td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(<span class="pl-smi">structure</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> Create array for sorting</span></td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> entriesArray <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">createArray</span>(entries);</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-en">createStructure</span>(structure,output,entriesArray);</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.bibtex_structure<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">remove</span>();</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span> iterate over bibTeX entries</span></td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-k">var</span> entryKey <span class="pl-k">in</span> entries) {</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> entry <span class="pl-k">=</span> entries[entryKey];</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">        tpl <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">createTemplate</span>(entry);</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">        </td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">output</span>.<span class="pl-c1">append</span>(tpl);</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">tpl</span>.<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> remove old entries</span></td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">old</span>.<span class="pl-c1">remove</span>();</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">bibtex_js_draw</span>() {</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.bibtex_template<span class="pl-pds">&quot;</span></span>).<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#bibtex_input<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">length</span>){</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">    (<span class="pl-k">new</span> <span class="pl-en">BibtexDisplay</span>()).<span class="pl-en">displayBibtex</span>(<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#bibtex_input<span class="pl-pds">&quot;</span></span>).<span class="pl-en">val</span>(), <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#bibtex_display<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span>Gets the BibTex files and adds them together</span></td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> bibstring <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>bibtex<span class="pl-pds">&#39;</span></span>).<span class="pl-en">each</span>(<span class="pl-k">function</span>(<span class="pl-smi">index</span>, <span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">       <span class="pl-smi">$</span>.<span class="pl-c1">get</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>src<span class="pl-pds">&#39;</span></span>), <span class="pl-k">function</span>(<span class="pl-smi">data</span>) {</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">        bibstring <span class="pl-k">+=</span> data;</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Executed on completion of last outstanding ajax call</span></td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">ajaxStop</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">      (<span class="pl-k">new</span> <span class="pl-en">BibtexDisplay</span>()).<span class="pl-en">displayBibtex</span>(bibstring, <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>#bibtex_display<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">loadExtras</span>();</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/**</span> </span></td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line"><span class="pl-c">BibTex Searcher is used with input form</span></td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">BibTeXSearcher</span>() {</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">inputArray</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-smi">inputLength</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">setInputArray</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">val</span>) {</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">inputArray</span> <span class="pl-k">=</span> val;</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">this</span>.<span class="pl-smi">inputLength</span> <span class="pl-k">=</span> <span class="pl-smi">val</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">getStringName</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">string</span>) {</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">  	<span class="pl-k">var</span> start_pos <span class="pl-k">=</span> <span class="pl-smi">string</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>@<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> end_pos <span class="pl-k">=</span> <span class="pl-smi">string</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>[<span class="pl-pds">&#39;</span></span>,start_pos);</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> array <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(end_pos<span class="pl-k">==</span><span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">	  array[<span class="pl-c1">0</span>] <span class="pl-k">=</span> <span class="pl-smi">string</span>.<span class="pl-c1">substring</span>(start_pos,<span class="pl-smi">string</span>.<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">	} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">	  array[<span class="pl-c1">0</span>] <span class="pl-k">=</span> <span class="pl-smi">string</span>.<span class="pl-c1">substring</span>(start_pos,end_pos);</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">	  end_pos2 <span class="pl-k">=</span> <span class="pl-smi">string</span>.<span class="pl-c1">indexOf</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span>,start_pos);</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">	  array[<span class="pl-c1">1</span>] <span class="pl-k">=</span> <span class="pl-smi">string</span>.<span class="pl-c1">substring</span>(end_pos<span class="pl-k">+</span><span class="pl-c1">1</span>,end_pos2);</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">  	<span class="pl-k">return</span> array;</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">checkEntry</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">entry</span>, <span class="pl-smi">word</span>) {</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> found <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(word[<span class="pl-c1">0</span>]<span class="pl-k">!=</span><span class="pl-s"><span class="pl-pds">&quot;</span>@<span class="pl-pds">&quot;</span></span>){</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">entry</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>span:not(.noread)<span class="pl-pds">&quot;</span></span>).<span class="pl-en">each</span>( </td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-c1">text</span>().<span class="pl-c1">search</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(word, <span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>)) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">           <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">entry</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>:visible<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">            found <span class="pl-k">=</span> <span class="pl-c1">true</span>; <span class="pl-k">return</span> <span class="pl-c1">false</span>; <span class="pl-c"><span class="pl-c">//</span>Break out of loop</span></td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span>This search version is for more specific searchs using the @name[parameter]=value</span></td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> strings <span class="pl-k">=</span> <span class="pl-smi">word</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>=<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">	  <span class="pl-k">var</span> arrayStr <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">getStringName</span>(strings[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">	  <span class="pl-k">if</span>(<span class="pl-smi">arrayStr</span>.<span class="pl-c1">length</span><span class="pl-k">&lt;</span><span class="pl-c1">2</span>) {</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">entry</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>span:not(.noread).<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>arrayStr[<span class="pl-c1">0</span>]).<span class="pl-en">each</span>( </td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-c1">text</span>().<span class="pl-c1">search</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(strings[<span class="pl-c1">1</span>], <span class="pl-s"><span class="pl-pds">&quot;</span>i<span class="pl-pds">&quot;</span></span>)) <span class="pl-k">&gt;</span> <span class="pl-k">-</span><span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">             <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">entry</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>:visible<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">              found <span class="pl-k">=</span> <span class="pl-c1">true</span>; <span class="pl-k">return</span> <span class="pl-c1">false</span>; <span class="pl-c"><span class="pl-c">//</span>Break out of loop</span></td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">      	<span class="pl-k">switch</span>(arrayStr[<span class="pl-c1">1</span>]){</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">      		<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>first<span class="pl-pds">&quot;</span></span>:</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">      			<span class="pl-smi">entry</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>span:not(.noread).<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>arrayStr[<span class="pl-c1">0</span>]).<span class="pl-en">each</span>( </td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">                  	arrayString <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-c1">text</span>().<span class="pl-c1">split</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>,[<span class="pl-cce">\\</span>s]+and[<span class="pl-cce">\\</span>s]+|,[<span class="pl-cce">\\</span>s]+<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span>(strings[<span class="pl-c1">1</span>] <span class="pl-k">==</span> arrayString[<span class="pl-c1">0</span>] <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">entry</span>.<span class="pl-en">is</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>:visible<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">                      found <span class="pl-k">=</span> <span class="pl-c1">true</span>; <span class="pl-k">return</span> <span class="pl-c1">false</span>; <span class="pl-c"><span class="pl-c">//</span>Break out of loop</span></td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">                  }</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">                });</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">      		<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">      	}</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> found;</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">unhideAll</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div#bibtex_display<span class="pl-pds">&quot;</span></span>).<span class="pl-en">children</span>().<span class="pl-en">each</span>( </td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.bibtexentry<span class="pl-pds">&quot;</span></span>).<span class="pl-en">each</span>(</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">              <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">show</span>();</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">hideEntry</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">word</span>) {</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> funcCaller <span class="pl-k">=</span> <span class="pl-c1">this</span>;</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> container <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div#bibtex_display<span class="pl-pds">&quot;</span></span>).<span class="pl-en">children</span>();</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(<span class="pl-smi">container</span>.<span class="pl-en">first</span>().<span class="pl-en">hasClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>bibtexentry:visible<span class="pl-pds">&quot;</span></span>)){</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">container</span>.<span class="pl-en">each</span>(</td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">funcCaller</span>.<span class="pl-en">checkEntry</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>),word)){</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">          } </td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">       });</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">container</span>.<span class="pl-en">each</span>( </td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> shouldHide <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.bibtexentry:visible<span class="pl-pds">&quot;</span></span>).<span class="pl-en">each</span>( </td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">funcCaller</span>.<span class="pl-en">checkEntry</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>),word)){</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">              } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">                shouldHide <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">          <span class="pl-c"><span class="pl-c">//</span> Hides outside div</span></td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span>(shouldHide) {</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">hide</span>();</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">       }); </td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">this</span>.<span class="pl-en">searcher</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">input</span>, <span class="pl-smi">needToRestart</span>) {</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">  	needToRestart <span class="pl-k">=</span> <span class="pl-k">typeof</span> needToRestart <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> needToRestart <span class="pl-k">:</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> string <span class="pl-k">=</span> input;</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span>(<span class="pl-smi">string</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> splitInput <span class="pl-k">=</span> <span class="pl-smi">string</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>%<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span>If input is less than restart</span></td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">inputLength</span><span class="pl-k">&gt;</span><span class="pl-smi">splitInput</span>.<span class="pl-c1">length</span> <span class="pl-k">||</span> <span class="pl-c1">this</span>.<span class="pl-smi">inputLength</span><span class="pl-k">==</span><span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">      	needToRestart <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line">      } </td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span>If last string reduced in size than restart</span></td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">inputArray</span>[<span class="pl-c1">this</span>.<span class="pl-smi">inputArray</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>].<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> </td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line">      	         splitInput[<span class="pl-smi">splitInput</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>].<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line">      	needToRestart <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">      } </td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">      <span class="pl-c"><span class="pl-c">//</span>If earlier words changed than restart</span></td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(<span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>; i<span class="pl-k">&lt;</span><span class="pl-c1">this</span>.<span class="pl-smi">inputArray</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>; i<span class="pl-k">++</span>){</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">      	  <span class="pl-k">if</span>(<span class="pl-c1">this</span>.<span class="pl-smi">inputArray</span>[i]<span class="pl-k">!=</span>splitInput[i]) {</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">      	    needToRestart <span class="pl-k">=</span> <span class="pl-c1">true</span>; <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">      	  }</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span>(needToRestart) {</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">      	<span class="pl-c1">this</span>.<span class="pl-en">unhideAll</span>();</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">      	<span class="pl-k">for</span>(<span class="pl-k">var</span> word <span class="pl-k">in</span> splitInput) {</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">this</span>.<span class="pl-en">hideEntry</span>(splitInput[word]);</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">      	<span class="pl-c1">this</span>.<span class="pl-en">hideEntry</span>(splitInput[<span class="pl-smi">splitInput</span>.<span class="pl-c1">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-en">setInputArray</span>(splitInput);</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line">      <span class="pl-c1">this</span>.<span class="pl-en">unhideAll</span>();</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">createWebPage</span>(<span class="pl-smi">defaultTemplate</span>) {</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> draw bibtex when loaded</span></td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">$</span>(<span class="pl-c1">document</span>).<span class="pl-en">ready</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> check for template, add default</span></td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.bibtex_template<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">size</span>() <span class="pl-k">==</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>body<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">append</span>(defaultTemplate);</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">bibtex_js_draw</span>();</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">loadExtras</span>()</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line">{ </td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line">  BibTeXSearcherClass <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">BibTeXSearcher</span>();</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.bibtex_author<span class="pl-pds">&quot;</span></span>).<span class="pl-en">each</span>(<span class="pl-k">function</span>(<span class="pl-smi">i</span>, <span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line">  	<span class="pl-en">authorList</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>));</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">localStorage</span>.<span class="pl-c1">removeItem</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>customerDatabase<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">localStorage</span>.<span class="pl-smi">searcher</span>) {</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line">  	<span class="pl-smi">localStorage</span>.<span class="pl-smi">searcher</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Object</span>();</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span>Resets selects when back button is used</span></td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>select<span class="pl-pds">&quot;</span></span>).<span class="pl-en">each</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line">  	<span class="pl-k">if</span>(<span class="pl-smi">localStorage</span>.<span class="pl-c1">getItem</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>id<span class="pl-pds">&quot;</span></span>))) {</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line">  	  <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">val</span>(<span class="pl-c1">JSON</span>.<span class="pl-c1">parse</span>(<span class="pl-smi">localStorage</span>.<span class="pl-c1">getItem</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>id<span class="pl-pds">&quot;</span></span>))));</td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line">   } </td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.bibtex_search<span class="pl-pds">&quot;</span></span>).<span class="pl-en">each</span>(<span class="pl-k">function</span>(<span class="pl-smi">i</span>, <span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line">  	<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>change<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">e</span>) { </td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line">  		<span class="pl-en">combineSearcher</span>(BibTeXSearcherClass, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line">  		<span class="pl-smi">localStorage</span>.<span class="pl-c1">setItem</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>id<span class="pl-pds">&quot;</span></span>), <span class="pl-c1">JSON</span>.<span class="pl-c1">stringify</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">val</span>()));</td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line">  	});</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">  	<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">keyup</span>(<span class="pl-k">function</span>() { </td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line">  		<span class="pl-en">combineSearcher</span>(BibTeXSearcherClass);</td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line">  	});</td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line">  	<span class="pl-k">if</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">val</span>()<span class="pl-k">!=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>){</td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line">  		<span class="pl-en">combineSearcher</span>(BibTeXSearcherClass, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">  	}</td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">	  </td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">combineSearcher</span>(<span class="pl-smi">searcherClass</span>, <span class="pl-smi">needToRestart</span>)</td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line">{</td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line">  needToRestart <span class="pl-k">=</span> <span class="pl-k">typeof</span> needToRestart <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> needToRestart <span class="pl-k">:</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> string <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>select.bibtex_search<span class="pl-pds">&quot;</span></span>).<span class="pl-en">each</span>(<span class="pl-k">function</span>(<span class="pl-smi">i</span>, <span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line">  	<span class="pl-k">var</span> front <span class="pl-k">=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line">  	<span class="pl-k">if</span>(<span class="pl-smi">obj</span>.<span class="pl-c1">hasAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>search<span class="pl-pds">&quot;</span></span>)) </td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line">  	  front <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>@<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>search<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line">  	<span class="pl-k">if</span>(<span class="pl-smi">obj</span>.<span class="pl-c1">hasAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>extra<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line">  	  front <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>[<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>extra<span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>]=<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line">  	} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code blob-code-inner js-file-line">  	  <span class="pl-k">if</span>(front<span class="pl-k">!=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code blob-code-inner js-file-line">  	  	front <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>=<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code blob-code-inner js-file-line">  	  }</td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code blob-code-inner js-file-line">  	}</td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code blob-code-inner js-file-line">  	<span class="pl-k">if</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">val</span>()<span class="pl-k">!=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line">  	  string <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span>front<span class="pl-k">+</span><span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">val</span>();</td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line">  	}</td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>input.bibtex_search<span class="pl-pds">&quot;</span></span>).<span class="pl-en">each</span>(<span class="pl-k">function</span>(<span class="pl-smi">i</span>, <span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line">  	<span class="pl-k">if</span>(<span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">val</span>()<span class="pl-k">!=</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line">  	  string <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>%<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-en">val</span>().<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">  	}</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">searcherClass</span>.<span class="pl-en">searcher</span>(string, needToRestart);</td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">authorList</span>(<span class="pl-smi">object</span>)</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">{</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> map <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Object</span>();</td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>span.author<span class="pl-pds">&quot;</span></span>).<span class="pl-en">each</span>(<span class="pl-k">function</span>(<span class="pl-smi">i</span>, <span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line">  	arrayString <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-c1">this</span>).<span class="pl-c1">text</span>().<span class="pl-c1">split</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>,[<span class="pl-cce">\\</span>s]+and[<span class="pl-cce">\\</span>s]+|,[<span class="pl-cce">\\</span>s]+<span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">  	<span class="pl-k">if</span>(<span class="pl-smi">object</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>extra<span class="pl-pds">&quot;</span></span>)<span class="pl-k">==</span><span class="pl-s"><span class="pl-pds">&quot;</span>first<span class="pl-pds">&quot;</span></span>){</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line">  		map[arrayString[<span class="pl-c1">0</span>]] <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line">  	} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line">	  	<span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">arrayString</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line">	  	  <span class="pl-k">if</span>(arrayString[i] <span class="pl-k">in</span> map) {</td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line">	  		map[arrayString[i]] <span class="pl-k">+=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line">	  	  } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code blob-code-inner js-file-line">	  		map[arrayString[i]] <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code blob-code-inner js-file-line">	  	  }</td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code blob-code-inner js-file-line">	  	}</td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code blob-code-inner js-file-line">  	}</td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> tuples <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> key <span class="pl-k">in</span> map) <span class="pl-smi">tuples</span>.<span class="pl-c1">push</span>([key, <span class="pl-smi">key</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>).<span class="pl-c1">pop</span>().<span class="pl-c1">toLowerCase</span>()]);</td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">tuples</span>.<span class="pl-c1">sort</span>(<span class="pl-k">function</span>(<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) {</td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code blob-code-inner js-file-line">    a <span class="pl-k">=</span> a[<span class="pl-c1">1</span>]; b <span class="pl-k">=</span> b[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> a <span class="pl-k">&lt;</span> b <span class="pl-k">?</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">:</span> (a <span class="pl-k">&gt;</span> b <span class="pl-k">?</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">tuples</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> key <span class="pl-k">=</span> tuples[i][<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> value <span class="pl-k">=</span> tuples[i][<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> array <span class="pl-k">=</span> <span class="pl-smi">key</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> text <span class="pl-k">=</span> <span class="pl-smi">array</span>.<span class="pl-c1">pop</span>()<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&quot;</span>, <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-smi">array</span>.<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">object</span>.<span class="pl-c1">append</span>(<span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;option&gt;&lt;/option&gt;<span class="pl-pds">&quot;</span></span>).<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>value<span class="pl-pds">&quot;</span></span>,key).<span class="pl-c1">text</span>(text));</td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> defaultTemplate <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div class=<span class="pl-cce">\&quot;</span>bibtex_template<span class="pl-cce">\&quot;</span>&gt;<span class="pl-pds">&quot;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line">                        <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;div class=<span class="pl-cce">\&quot;</span>if author<span class="pl-cce">\&quot;</span> style=<span class="pl-cce">\&quot;</span>font-weight: bold;<span class="pl-cce">\&quot;</span>&gt;<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line">                        <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;span class=<span class="pl-cce">\&quot;</span>if year<span class="pl-cce">\&quot;</span>&gt;<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line">                        <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;span class=<span class="pl-cce">\&quot;</span>year<span class="pl-cce">\&quot;</span>&gt;&lt;/span&gt;,<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line">                        <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/span&gt;<span class="pl-cce">\n</span>  &lt;span class=<span class="pl-cce">\&quot;</span>author<span class="pl-cce">\&quot;</span>&gt;&lt;/span&gt;<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">                        <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;span class=<span class="pl-cce">\&quot;</span>if url<span class="pl-cce">\&quot;</span> style=<span class="pl-cce">\&quot;</span>margin-left: 20px<span class="pl-cce">\&quot;</span>&gt;<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line">                        <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;a class=<span class="pl-cce">\&quot;</span>url<span class="pl-cce">\&quot;</span> style=<span class="pl-cce">\&quot;</span>color:black; font-size:10px<span class="pl-cce">\&quot;</span>&gt;(view online)&lt;/a&gt;<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">                        <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/span&gt;<span class="pl-cce">\n</span>&lt;/div&gt;<span class="pl-cce">\n</span>&lt;div style=<span class="pl-cce">\&quot;</span>margin-left: 10px; margin-bottom:5px;<span class="pl-cce">\&quot;</span>&gt;<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">                        <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;span class=<span class="pl-cce">\&quot;</span>title<span class="pl-cce">\&quot;</span>&gt;&lt;/span&gt;<span class="pl-cce">\n</span>&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> check whether or not jquery is present</span></td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">window</span>.<span class="pl-smi">jQuery</span>) {</td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span>Add jquery to the webpage</span></td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> jq <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>script<span class="pl-pds">&#39;</span></span>); <span class="pl-smi">jq</span>.<span class="pl-c1">type</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>text/javascript<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">jq</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">document</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>head<span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">0</span>].<span class="pl-c1">appendChild</span>(jq);</td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Poll for jQuery to come into existance</span></td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-en">checkReady</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (<span class="pl-c1">window</span>.<span class="pl-smi">jQuery</span>) {</td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">callback</span>(jQuery);</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code blob-code-inner js-file-line">          <span class="pl-c1">window</span>.<span class="pl-en">setTimeout</span>(<span class="pl-k">function</span>() { <span class="pl-en">checkReady</span>(callback); }, <span class="pl-c1">100</span>);</td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code blob-code-inner js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code blob-code-inner js-file-line">  </td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Start polling...</span></td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">checkReady</span>(<span class="pl-k">function</span>(<span class="pl-smi">$</span>){<span class="pl-en">createWebPage</span>(defaultTemplate);});</td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code blob-code-inner js-file-line">} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code blob-code-inner js-file-line">  <span class="pl-c"><span class="pl-c">//</span> Create the webpage</span></td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">createWebPage</span>(defaultTemplate);</td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code blob-code-inner js-file-line">var latex_to_unicode={&quot;\\space&quot;:&quot;\u0020&quot;,&quot;\\#&quot;:&quot;\u0023&quot;,&quot;\\textdollar&quot;:&quot;\u0024&quot;,&quot;\\%&quot;:&quot;\u0025&quot;,&quot;\\&amp;&quot;:&quot;\u0026&quot;,&quot;\\textquotesingle&quot;:&quot;\u0027&quot;,&quot;\\ast&quot;:&quot;\u002A&quot;,&quot;\\textbackslash&quot;:&quot;\u005C&quot;,&quot;\\^{}&quot;:&quot;\u005E&quot;,&quot;\\_&quot;:&quot;\u005F&quot;,&quot;\\textasciigrave&quot;:&quot;\u0060&quot;,&quot;\\lbrace&quot;:&quot;\u007B&quot;,&quot;\\vert&quot;:&quot;\u007C&quot;,&quot;\\rbrace&quot;:&quot;\u007D&quot;,&quot;\\textasciitilde&quot;:&quot;\u007E&quot;,&quot;\\textexclamdown&quot;:&quot;\u00A1&quot;,&quot;\\textcent&quot;:&quot;\u00A2&quot;,&quot;\\textsterling&quot;:&quot;\u00A3&quot;,&quot;\\textcurrency&quot;:&quot;\u00A4&quot;,&quot;\\textyen&quot;:&quot;\u00A5&quot;,&quot;\\textbrokenbar&quot;:&quot;\u00A6&quot;,&quot;\\textsection&quot;:&quot;\u00A7&quot;,&quot;\\textasciidieresis&quot;:&quot;\u00A8&quot;,&quot;\\textcopyright&quot;:&quot;\u00A9&quot;,&quot;\\textordfeminine&quot;:&quot;\u00AA&quot;,&quot;\\guillemotleft&quot;:&quot;\u00AB&quot;,&quot;\\lnot&quot;:&quot;\u00AC&quot;,&quot;\u00AD&quot;:&quot;\\-&quot;,&quot;\\textregistered&quot;:&quot;\u00AE&quot;,&quot;\\textasciimacron&quot;:&quot;\u00AF&quot;,&quot;\\textdegree&quot;:&quot;\u00B0&quot;,&quot;\\pm&quot;:&quot;\u00B1&quot;,&quot;{^2}&quot;:&quot;\u00B2&quot;,&quot;{^3}&quot;:&quot;\u00B3&quot;,&quot;\\textasciiacute&quot;:&quot;\u00B4&quot;,&quot;\\mathrm{\\mu}&quot;:&quot;\u00B5&quot;,&quot;\\textparagraph&quot;:&quot;\u00B6&quot;,&quot;\\cdot&quot;:&quot;\u00B7&quot;,&quot;\\c{}&quot;:&quot;\u00B8&quot;,&quot;{^1}&quot;:&quot;\u00B9&quot;,&quot;\\textordmasculine&quot;:&quot;\u00BA&quot;,&quot;\\guillemotright&quot;:&quot;\u00BB&quot;,&quot;\\textonequarter&quot;:&quot;\u00BC&quot;,&quot;\\textonehalf&quot;:&quot;\u00BD&quot;,&quot;\\textthreequarters&quot;:&quot;\u00BE&quot;,&quot;\\textquestiondown&quot;:&quot;\u00BF&quot;,&quot;\\`{A}&quot;:&quot;\u00C0&quot;,&quot;\\&#39;{A}&quot;:&quot;\u00C1&quot;,&quot;\\^{A}&quot;:&quot;\u00C2&quot;,&quot;\\~{A}&quot;:&quot;\u00C3&quot;,&quot;\\\&quot;{A}&quot;:&quot;\u00C4&quot;,&quot;\\\&quot;{a}&quot;:&quot;\u00E4&quot;,&quot;\\\&quot;a&quot;:&quot;\u00E4&quot;,&quot;\\AA&quot;:&quot;\u00C5&quot;,&quot;\\AE&quot;:&quot;\u00C6&quot;,&quot;\\c{C}&quot;:&quot;\u00C7&quot;,&quot;\\`{E}&quot;:&quot;\u00C8&quot;,&quot;\\&#39;{E}&quot;:&quot;\u00C9&quot;,&quot;\\^{E}&quot;:&quot;\u00CA&quot;,&quot;\\\&quot;{E}&quot;:&quot;\u00CB&quot;,&quot;\\`{I}&quot;:&quot;\u00CC&quot;,&quot;\\&#39;{I}&quot;:&quot;\u00CD&quot;,&quot;\\^{I}&quot;:&quot;\u00CE&quot;,&quot;\\\&quot;{I}&quot;:&quot;\u00CF&quot;,&quot;\\DH&quot;:&quot;\u00D0&quot;,&quot;\\~{N}&quot;:&quot;\u00D1&quot;,&quot;\\`{O}&quot;:&quot;\u00D2&quot;,&quot;\\&#39;{O}&quot;:&quot;\u00D3&quot;,&quot;\\^{O}&quot;:&quot;\u00D4&quot;,&quot;\\~{O}&quot;:&quot;\u00D5&quot;,&quot;\\\&quot;{O}&quot;:&quot;\u00D6&quot;,&quot;\\texttimes&quot;:&quot;\u00D7&quot;,&quot;\\O &quot;:&quot;&quot;,&quot;\\`{U}&quot;:&quot;\u00D9&quot;,&quot;\\&#39;{U}&quot;:&quot;\u00DA&quot;,&quot;\\^{U}&quot;:&quot;\u00DB&quot;,&quot;\\\&quot;{U}&quot;:&quot;\u00DC&quot;,&quot;\\&#39;{Y}&quot;:&quot;\u00DD&quot;,&quot;\\TH&quot;:&quot;\u00DE&quot;,&quot;\\ss&quot;:&quot;\u00DF&quot;,&quot;\\`{a}&quot;:&quot;\u00E0&quot;,&quot;\\&#39;{a}&quot;:&quot;\u00E1&quot;,&quot;\\^{a}&quot;:&quot;\u00E2&quot;,&quot;\\~{a}&quot;:&quot;\u00E3&quot;,&quot;\\\&quot;{a}&quot;:&quot;\u00E4&quot;,&quot;\\aa&quot;:&quot;\u00E5&quot;,&quot;\\ae&quot;:&quot;\u00E6&quot;,&quot;\\c{c}&quot;:&quot;\u00E7&quot;,&quot;\\`{e}&quot;:&quot;\u00E8&quot;,&quot;\\&#39;{e}&quot;:&quot;\u00E9&quot;,&quot;\\^{e}&quot;:&quot;\u00EA&quot;,&quot;\\\&quot;{e}&quot;:&quot;\u00EB&quot;,&quot;\\`{\\i}&quot;:&quot;\u00EC&quot;,&quot;\\&#39;{\\i}&quot;:&quot;\u00ED&quot;,&quot;\\^{\\i}&quot;:&quot;\u00EE&quot;,&quot;\\\&quot;\\i &quot;:&quot;&quot;,&quot;\\`{i}&quot;:&quot;\u00EC&quot;,&quot;\\&#39;{i}&quot;:&quot;\u00ED&quot;,&quot;\\^{i}&quot;:&quot;\u00EE&quot;,&quot;\\\&quot;i&quot;:&quot;\u00EF&quot;,&quot;\\dh&quot;:&quot;\u00F0&quot;,&quot;\\~{n}&quot;:&quot;\u00F1&quot;,&quot;\\~n&quot;:&quot;\u00F1&quot;,&quot;\\`{o}&quot;:&quot;\u00F2&quot;,&quot;\\&#39;{o}&quot;:&quot;\u00F3&quot;,&quot;\\^{o}&quot;:&quot;\u00F4&quot;,&quot;\\~{o}&quot;:&quot;\u00F5&quot;,&quot;\\\&quot;{o}&quot;:&quot;\u00F6&quot;,&quot;\\div&quot;:&quot;\u00F7&quot;,&quot;\\o&quot;:&quot;\u00F8&quot;,&quot;\\`{u}&quot;:&quot;\u00F9&quot;,&quot;\\&#39;{u}&quot;:&quot;\u00FA&quot;,&quot;\\^{u}&quot;:&quot;\u00FB&quot;,&quot;\\\&quot;{u}&quot;:&quot;\u00FC&quot;,&quot;\\&#39;{y}&quot;:&quot;\u00FD&quot;,&quot;\\th&quot;:&quot;\u00FE&quot;,&quot;\\\&quot;{y}&quot;:&quot;\u00FF&quot;,&quot;\\={A}&quot;:&quot;\u0100&quot;,&quot;\\={a}&quot;:&quot;\u0101&quot;,&quot;\\u{A}&quot;:&quot;\u0102&quot;,&quot;\\u{a}&quot;:&quot;\u0103&quot;,&quot;\\k{A}&quot;:&quot;\u0104&quot;,&quot;\\k{a}&quot;:&quot;\u0105&quot;,&quot;\\&#39;{C}&quot;:&quot;\u0106&quot;,&quot;\\&#39;{c}&quot;:&quot;\u0107&quot;,&quot;\\^{C}&quot;:&quot;\u0108&quot;,&quot;\\^{c}&quot;:&quot;\u0109&quot;,&quot;\\.{C}&quot;:&quot;\u010A&quot;,&quot;\\.{c}&quot;:&quot;\u010B&quot;,&quot;\\v{C}&quot;:&quot;\u010C&quot;,&quot;\\v{c}&quot;:&quot;\u010D&quot;,&quot;\\v{D}&quot;:&quot;\u010E&quot;,&quot;\\v{d}&quot;:&quot;\u010F&quot;,&quot;\\DJ&quot;:&quot;\u0110&quot;,&quot;\\dj&quot;:&quot;\u0111&quot;,&quot;\\={E}&quot;:&quot;\u0112&quot;,&quot;\\={e}&quot;:&quot;\u0113&quot;,&quot;\\u{E}&quot;:&quot;\u0114&quot;,&quot;\\u{e}&quot;:&quot;\u0115&quot;,&quot;\\.{E}&quot;:&quot;\u0116&quot;,&quot;\\.{e}&quot;:&quot;\u0117&quot;,&quot;\\k{E}&quot;:&quot;\u0118&quot;,&quot;\\k{e}&quot;:&quot;\u0119&quot;,&quot;\\v{E}&quot;:&quot;\u011A&quot;,&quot;\\v{e}&quot;:&quot;\u011B&quot;,&quot;\\^{G}&quot;:&quot;\u011C&quot;,&quot;\\^{g}&quot;:&quot;\u011D&quot;,&quot;\\u{G}&quot;:&quot;\u011E&quot;,&quot;\\u{g}&quot;:&quot;\u011F&quot;,&quot;\\.{G}&quot;:&quot;\u0120&quot;,&quot;\\.{g}&quot;:&quot;\u0121&quot;,&quot;\\c{G}&quot;:&quot;\u0122&quot;,&quot;\\c{g}&quot;:&quot;\u0123&quot;,&quot;\\^{H}&quot;:&quot;\u0124&quot;,&quot;\\^{h}&quot;:&quot;\u0125&quot;,&quot;\\fontencoding{LELA}\\selectfont\\char40&quot;:&quot;\u0126&quot;,&quot;\\Elzxh&quot;:&quot;\u0127&quot;,&quot;\\~{I}&quot;:&quot;\u0128&quot;,&quot;\\~{\\i}&quot;:&quot;\u0129&quot;,&quot;\\={I}&quot;:&quot;\u012A&quot;,&quot;\\={\\i}&quot;:&quot;\u012B&quot;,&quot;\\u{I}&quot;:&quot;\u012C&quot;,&quot;\\u{\\i}&quot;:&quot;\u012D&quot;,&quot;\\k{I}&quot;:&quot;\u012E&quot;,&quot;\\k{i}&quot;:&quot;\u012F&quot;,&quot;\\.{I}&quot;:&quot;\u0130&quot;,&quot;\\i &quot;:&quot;\u0131&quot;,&quot;IJ&quot;:&quot;\u0132&quot;,&quot;ij&quot;:&quot;\u0133&quot;,&quot;\\^{J}&quot;:&quot;\u0134&quot;,&quot;\\^{\\j}&quot;:&quot;\u0135&quot;,&quot;\\c{K}&quot;:&quot;\u0136&quot;,&quot;\\c{k}&quot;:&quot;\u0137&quot;,&quot;{\\fontencoding{LELA}\\selectfont\\char91}&quot;:&quot;\u0138&quot;,&quot;\\&#39;{L}&quot;:&quot;\u0139&quot;,&quot;\\&#39;{l}&quot;:&quot;\u013A&quot;,&quot;\\c{L}&quot;:&quot;\u013B&quot;,&quot;\\c{l}&quot;:&quot;\u013C&quot;,&quot;\\v{L}&quot;:&quot;\u013D&quot;,&quot;\\v{l}&quot;:&quot;\u013E&quot;,&quot;{\\fontencoding{LELA}\\selectfont\\char201}&quot;:&quot;\u013F&quot;,&quot;{\\fontencoding{LELA}\\selectfont\\char202}&quot;:&quot;\u0140&quot;,&quot;\\L &quot;:&quot;&quot;,&quot;\\l &quot;:&quot;&quot;,&quot;\\&#39;{N}&quot;:&quot;\u0143&quot;,&quot;\\&#39;{n}&quot;:&quot;\u0144&quot;,&quot;\\c{N}&quot;:&quot;\u0145&quot;,&quot;\\c{n}&quot;:&quot;\u0146&quot;,&quot;\\v{N}&quot;:&quot;\u0147&quot;,&quot;\\v{n}&quot;:&quot;\u0148&quot;,&quot;&#39;n&quot;:&quot;\u0149&quot;,&quot;\\NG&quot;:&quot;\u014A&quot;,&quot;\\ng&quot;:&quot;\u014B&quot;,&quot;\\={O}&quot;:&quot;\u014C&quot;,&quot;\\={o}&quot;:&quot;\u014D&quot;,&quot;\\u{O}&quot;:&quot;\u014E&quot;,&quot;\\u{o}&quot;:&quot;\u014F&quot;,&quot;\\H{O}&quot;:&quot;\u0150&quot;,&quot;\\H{o}&quot;:&quot;\u0151&quot;,&quot;\\OE&quot;:&quot;\u0152&quot;,&quot;\\oe&quot;:&quot;\u0153&quot;,&quot;\\&#39;{R}&quot;:&quot;\u0154&quot;,&quot;\\&#39;{r}&quot;:&quot;\u0155&quot;,&quot;\\c{R}&quot;:&quot;\u0156&quot;,&quot;\\c{r}&quot;:&quot;\u0157&quot;,&quot;\\v{R}&quot;:&quot;\u0158&quot;,&quot;\\v{r}&quot;:&quot;\u0159&quot;,&quot;\\&#39;{S}&quot;:&quot;\u015A&quot;,&quot;\\&#39;{s}&quot;:&quot;\u015B&quot;,&quot;\\^{S}&quot;:&quot;\u015C&quot;,&quot;\\^{s}&quot;:&quot;\u015D&quot;,&quot;\\c{S}&quot;:&quot;\u015E&quot;,&quot;\\c{s}&quot;:&quot;\u015F&quot;,&quot;\\v{S}&quot;:&quot;\u0160&quot;,&quot;\\v{s}&quot;:&quot;\u0161&quot;,&quot;\\c{T}&quot;:&quot;\u0162&quot;,&quot;\\c{t}&quot;:&quot;\u0163&quot;,&quot;\\v{T}&quot;:&quot;\u0164&quot;,&quot;\\v{t}&quot;:&quot;\u0165&quot;,&quot;{\\fontencoding{LELA}\\selectfont\\char47}&quot;:&quot;\u0166&quot;,&quot;{\\fontencoding{LELA}\\selectfont\\char63}&quot;:&quot;\u0167&quot;,&quot;\\~{U}&quot;:&quot;\u0168&quot;,&quot;\\~{u}&quot;:&quot;\u0169&quot;,&quot;\\={U}&quot;:&quot;\u016A&quot;,&quot;\\={u}&quot;:&quot;\u016B&quot;,&quot;\\u{U}&quot;:&quot;\u016C&quot;,&quot;\\u{u}&quot;:&quot;\u016D&quot;,&quot;\\r{U}&quot;:&quot;\u016E&quot;,&quot;\\r{u}&quot;:&quot;\u016F&quot;,&quot;\\H{U}&quot;:&quot;\u0170&quot;,&quot;\\H{u}&quot;:&quot;\u0171&quot;,&quot;\\k{U}&quot;:&quot;\u0172&quot;,&quot;\\k{u}&quot;:&quot;\u0173&quot;,&quot;\\^{W}&quot;:&quot;\u0174&quot;,&quot;\\^{w}&quot;:&quot;\u0175&quot;,&quot;\\^{Y}&quot;:&quot;\u0176&quot;,&quot;\\^{y}&quot;:&quot;\u0177&quot;,&quot;\\\&quot;{Y}&quot;:&quot;\u0178&quot;,&quot;\\&#39;{Z}&quot;:&quot;\u0179&quot;,&quot;\\&#39;{z}&quot;:&quot;\u017A&quot;,&quot;\\.{Z}&quot;:&quot;\u017B&quot;,&quot;\\.{z}&quot;:&quot;\u017C&quot;,&quot;\\v{Z}&quot;:&quot;\u017D&quot;,&quot;\\v{z}&quot;:&quot;\u017E&quot;,&quot;\\texthvlig&quot;:&quot;\u0195&quot;,&quot;\\textnrleg&quot;:&quot;\u019E&quot;,&quot;\\eth&quot;:&quot;\u01AA&quot;,&quot;{\\fontencoding{LELA}\\selectfont\\char195}&quot;:&quot;\u01BA&quot;,&quot;\\textdoublepipe&quot;:&quot;\u01C2&quot;,&quot;\\&#39;{g}&quot;:&quot;\u01F5&quot;,&quot;\\Elztrna&quot;:&quot;\u0250&quot;,&quot;\\Elztrnsa&quot;:&quot;\u0252&quot;,&quot;\\Elzopeno&quot;:&quot;\u0254&quot;,&quot;\\Elzrtld&quot;:&quot;\u0256&quot;,&quot;{\\fontencoding{LEIP}\\selectfont\\char61}&quot;:&quot;\u0258&quot;,&quot;\\Elzschwa&quot;:&quot;\u0259&quot;,&quot;\\varepsilon&quot;:&quot;\u025B&quot;,&quot;\\Elzpgamma&quot;:&quot;\u0263&quot;,&quot;\\Elzpbgam&quot;:&quot;\u0264&quot;,&quot;\\Elztrnh&quot;:&quot;\u0265&quot;,&quot;\\Elzbtdl&quot;:&quot;\u026C&quot;,&quot;\\Elzrtll&quot;:&quot;\u026D&quot;,&quot;\\Elztrnm&quot;:&quot;\u026F&quot;,&quot;\\Elztrnmlr&quot;:&quot;\u0270&quot;,&quot;\\Elzltlmr&quot;:&quot;\u0271&quot;,&quot;\\Elzltln&quot;:&quot;\u0272&quot;,&quot;\\Elzrtln&quot;:&quot;\u0273&quot;,&quot;\\Elzclomeg&quot;:&quot;\u0277&quot;,&quot;\\textphi&quot;:&quot;\u0278&quot;,&quot;\\Elztrnr&quot;:&quot;\u0279&quot;,&quot;\\Elztrnrl&quot;:&quot;\u027A&quot;,&quot;\\Elzrttrnr&quot;:&quot;\u027B&quot;,&quot;\\Elzrl&quot;:&quot;\u027C&quot;,&quot;\\Elzrtlr&quot;:&quot;\u027D&quot;,&quot;\\Elzfhr&quot;:&quot;\u027E&quot;,&quot;{\\fontencoding{LEIP}\\selectfont\\char202}&quot;:&quot;\u027F&quot;,&quot;\\Elzrtls&quot;:&quot;\u0282&quot;,&quot;\\Elzesh&quot;:&quot;\u0283&quot;,&quot;\\Elztrnt&quot;:&quot;\u0287&quot;,&quot;\\Elzrtlt&quot;:&quot;\u0288&quot;,&quot;\\Elzpupsil&quot;:&quot;\u028A&quot;,&quot;\\Elzpscrv&quot;:&quot;\u028B&quot;,&quot;\\Elzinvv&quot;:&quot;\u028C&quot;,&quot;\\Elzinvw&quot;:&quot;\u028D&quot;,&quot;\\Elztrny&quot;:&quot;\u028E&quot;,&quot;\\Elzrtlz&quot;:&quot;\u0290&quot;,&quot;\\Elzyogh&quot;:&quot;\u0292&quot;,&quot;\\Elzglst&quot;:&quot;\u0294&quot;,&quot;\\Elzreglst&quot;:&quot;\u0295&quot;,&quot;\\Elzinglst&quot;:&quot;\u0296&quot;,&quot;\\textturnk&quot;:&quot;\u029E&quot;,&quot;\\Elzdyogh&quot;:&quot;\u02A4&quot;,&quot;\\Elztesh&quot;:&quot;\u02A7&quot;,&quot;\\textasciicaron&quot;:&quot;\u02C7&quot;,&quot;\\Elzverts&quot;:&quot;\u02C8&quot;,&quot;\\Elzverti&quot;:&quot;\u02CC&quot;,&quot;\\Elzlmrk&quot;:&quot;\u02D0&quot;,&quot;\\Elzhlmrk&quot;:&quot;\u02D1&quot;,&quot;\\Elzsbrhr&quot;:&quot;\u02D2&quot;,&quot;\\Elzsblhr&quot;:&quot;\u02D3&quot;,&quot;\\Elzrais&quot;:&quot;\u02D4&quot;,&quot;\\Elzlow&quot;:&quot;\u02D5&quot;,&quot;\\textasciibreve&quot;:&quot;\u02D8&quot;,&quot;\\textperiodcentered&quot;:&quot;\u02D9&quot;,&quot;\\r{}&quot;:&quot;\u02DA&quot;,&quot;\\k{}&quot;:&quot;\u02DB&quot;,&quot;\\texttildelow&quot;:&quot;\u02DC&quot;,&quot;\\H{}&quot;:&quot;\u02DD&quot;,&quot;\\tone{55}&quot;:&quot;\u02E5&quot;,&quot;\\tone{44}&quot;:&quot;\u02E6&quot;,&quot;\\tone{33}&quot;:&quot;\u02E7&quot;,&quot;\\tone{22}&quot;:&quot;\u02E8&quot;,&quot;\\tone{11}&quot;:&quot;\u02E9&quot;,&quot;\\` &quot;:&quot;&quot;,&quot;\\`&quot;:&quot;&quot;,&quot;\\&#39; &quot;:&quot;&quot;,&quot;\\&#39;&quot;:&quot;&quot;,&quot;\\^ &quot;:&quot;&quot;,&quot;\\^&quot;:&quot;&quot;,&quot;\\~ &quot;:&quot;&quot;,&quot;\\~&quot;:&quot;&quot;,&quot;\\=&quot;:&quot;\u0304&quot;,&quot;\\u &quot;:&quot;&quot;,&quot;\\u&quot;:&quot;&quot;,&quot;\\. &quot;:&quot;&quot;,&quot;\\\&quot; &quot;:&quot;&quot;,&quot;\\\&quot;&quot;:&quot;&quot;,&quot;\\em&quot;:&quot;&quot;,&quot;\\sc&quot;:&quot;&quot;,&quot;\\r &quot;:&quot;&quot;,&quot;\\H &quot;:&quot;&quot;,&quot;\\v &quot;:&quot;&quot;,&quot;\\cyrchar\\C&quot;:&quot;\u030F&quot;,&quot;{\\fontencoding{LECO}\\selectfont\\char177}&quot;:&quot;\u0311&quot;,&quot;{\\fontencoding{LECO}\\selectfont\\char184}&quot;:&quot;\u0318&quot;,&quot;{\\fontencoding{LECO}\\selectfont\\char185}&quot;:&quot;\u0319&quot;,&quot;\\Elzpalh&quot;:&quot;\u0321&quot;,&quot;\\Elzrh&quot;:&quot;\u0322&quot;,&quot;\\c &quot;:&quot;&quot;,&quot;\\k &quot;:&quot;&quot;,&quot;\\Elzsbbrg&quot;:&quot;\u032A&quot;,&quot;{\\fontencoding{LECO}\\selectfont\\char203}&quot;:&quot;\u032B&quot;,&quot;{\\fontencoding{LECO}\\selectfont\\char207}&quot;:&quot;\u032F&quot;,&quot;\\Elzxl&quot;:&quot;\u0335&quot;,&quot;\\Elzbar&quot;:&quot;\u0336&quot;,&quot;{\\fontencoding{LECO}\\selectfont\\char215}&quot;:&quot;\u0337&quot;,&quot;{\\fontencoding{LECO}\\selectfont\\char216}&quot;:&quot;\u0338&quot;,&quot;{\\fontencoding{LECO}\\selectfont\\char218}&quot;:&quot;\u033A&quot;,&quot;{\\fontencoding{LECO}\\selectfont\\char219}&quot;:&quot;\u033B&quot;,&quot;{\\fontencoding{LECO}\\selectfont\\char220}&quot;:&quot;\u033C&quot;,&quot;{\\fontencoding{LECO}\\selectfont\\char221}&quot;:&quot;\u033D&quot;,&quot;{\\fontencoding{LECO}\\selectfont\\char225}&quot;:&quot;\u0361&quot;,&quot;\\&#39;{A}&quot;:&quot;\u0386&quot;,&quot;\\&#39;{E}&quot;:&quot;\u0388&quot;,&quot;\\&#39;{H}&quot;:&quot;\u0389&quot;,&quot;\\&#39;{}{I}&quot;:&quot;\u038A&quot;,&quot;\\&#39;{}O&quot;:&quot;\u038C&quot;,&quot;\\mathrm{&#39;Y}&quot;:&quot;\u038E&quot;,&quot;\\mathrm{&#39;\\Omega}&quot;:&quot;\u038F&quot;,&quot;\\acute{\\ddot{\\iota}}&quot;:&quot;\u0390&quot;,&quot;\\Alpha&quot;:&quot;\u0391&quot;,&quot;\\Beta&quot;:&quot;\u0392&quot;,&quot;\\Gamma&quot;:&quot;\u0393&quot;,&quot;\\Delta&quot;:&quot;\u0394&quot;,&quot;\\Epsilon&quot;:&quot;\u0395&quot;,&quot;\\Zeta&quot;:&quot;\u0396&quot;,&quot;\\Eta&quot;:&quot;\u0397&quot;,&quot;\\Theta&quot;:&quot;\u0398&quot;,&quot;\\Iota&quot;:&quot;\u0399&quot;,&quot;\\Kappa&quot;:&quot;\u039A&quot;,&quot;\\Lambda&quot;:&quot;\u039B&quot;,&quot;\\Xi&quot;:&quot;\u039E&quot;,&quot;\\Pi&quot;:&quot;\u03A0&quot;,&quot;\\Rho&quot;:&quot;\u03A1&quot;,&quot;\\Sigma&quot;:&quot;\u03A3&quot;,&quot;\\Tau&quot;:&quot;\u03A4&quot;,&quot;\\Upsilon&quot;:&quot;\u03A5&quot;,&quot;\\Phi&quot;:&quot;\u03A6&quot;,&quot;\\Chi&quot;:&quot;\u03A7&quot;,&quot;\\Psi&quot;:&quot;\u03A8&quot;,&quot;\\Omega&quot;:&quot;\u03A9&quot;,&quot;\\mathrm{\\ddot{I}}&quot;:&quot;\u03AA&quot;,&quot;\\mathrm{\\ddot{Y}}&quot;:&quot;\u03AB&quot;,&quot;\u03AC&quot;:&quot;\\&#39;{$\\alpha$}&quot;,&quot;\\acute{\\epsilon}&quot;:&quot;\u03AD&quot;,&quot;\\acute{\\eta}&quot;:&quot;\u03AE&quot;,&quot;\\acute{\\iota}&quot;:&quot;\u03AF&quot;,&quot;\\acute{\\ddot{\\upsilon}}&quot;:&quot;\u03B0&quot;,&quot;\\alpha&quot;:&quot;\u03B1&quot;,&quot;\\beta&quot;:&quot;\u03B2&quot;,&quot;\\gamma&quot;:&quot;\u03B3&quot;,&quot;\\delta&quot;:&quot;\u03B4&quot;,&quot;\\epsilon&quot;:&quot;\u03B5&quot;,&quot;\\zeta&quot;:&quot;\u03B6&quot;,&quot;\\eta&quot;:&quot;\u03B7&quot;,&quot;\\texttheta&quot;:&quot;\u03B8&quot;,&quot;\\iota&quot;:&quot;\u03B9&quot;,&quot;\\kappa&quot;:&quot;\u03BA&quot;,&quot;\\lambda&quot;:&quot;\u03BB&quot;,&quot;\\mu&quot;:&quot;\u03BC&quot;,&quot;\\nu&quot;:&quot;\u03BD&quot;,&quot;\\xi&quot;:&quot;\u03BE&quot;,&quot;\\pi&quot;:&quot;\u03C0&quot;,&quot;\\rho&quot;:&quot;\u03C1&quot;,&quot;\\varsigma&quot;:&quot;\u03C2&quot;,&quot;\\sigma&quot;:&quot;\u03C3&quot;,&quot;\\tau&quot;:&quot;\u03C4&quot;,&quot;\\upsilon&quot;:&quot;\u03C5&quot;,&quot;\\varphi&quot;:&quot;\u03C6&quot;,&quot;\\chi&quot;:&quot;\u03C7&quot;,&quot;\\psi&quot;:&quot;\u03C8&quot;,&quot;\\omega&quot;:&quot;\u03C9&quot;,&quot;\\ddot{\\iota}&quot;:&quot;\u03CA&quot;,&quot;\\ddot{\\upsilon}&quot;:&quot;\u03CB&quot;,&quot;\\&#39;{o}&quot;:&quot;\u03CC&quot;,&quot;\\acute{\\upsilon}&quot;:&quot;\u03CD&quot;,&quot;\\acute{\\omega}&quot;:&quot;\u03CE&quot;,&quot;\\Pisymbol{ppi022}{87}&quot;:&quot;\u03D0&quot;,&quot;\\textvartheta&quot;:&quot;\u03D1&quot;,&quot;\\Upsilon&quot;:&quot;\u03D2&quot;,&quot;\\phi&quot;:&quot;\u03D5&quot;,&quot;\\varpi&quot;:&quot;\u03D6&quot;,&quot;\\Stigma&quot;:&quot;\u03DA&quot;,&quot;\\Digamma&quot;:&quot;\u03DC&quot;,&quot;\\digamma&quot;:&quot;\u03DD&quot;,&quot;\\Koppa&quot;:&quot;\u03DE&quot;,&quot;\\Sampi&quot;:&quot;\u03E0&quot;,&quot;\\varkappa&quot;:&quot;\u03F0&quot;,&quot;\\varrho&quot;:&quot;\u03F1&quot;,&quot;\\textTheta&quot;:&quot;\u03F4&quot;,&quot;\\backepsilon&quot;:&quot;\u03F6&quot;,&quot;\\cyrchar\\CYRYO&quot;:&quot;\u0401&quot;,&quot;\\cyrchar\\CYRDJE&quot;:&quot;\u0402&quot;,&quot;\\cyrchar{\\&#39;\\CYRG}&quot;:&quot;\u0403&quot;,&quot;\\cyrchar\\CYRIE&quot;:&quot;\u0404&quot;,&quot;\\cyrchar\\CYRDZE&quot;:&quot;\u0405&quot;,&quot;\\cyrchar\\CYRII&quot;:&quot;\u0406&quot;,&quot;\\cyrchar\\CYRYI&quot;:&quot;\u0407&quot;,&quot;\\cyrchar\\CYRJE&quot;:&quot;\u0408&quot;,&quot;\\cyrchar\\CYRLJE&quot;:&quot;\u0409&quot;,&quot;\\cyrchar\\CYRNJE&quot;:&quot;\u040A&quot;,&quot;\\cyrchar\\CYRTSHE&quot;:&quot;\u040B&quot;,&quot;\\cyrchar{\\&#39;\\CYRK}&quot;:&quot;\u040C&quot;,&quot;\\cyrchar\\CYRUSHRT&quot;:&quot;\u040E&quot;,&quot;\\cyrchar\\CYRDZHE&quot;:&quot;\u040F&quot;,&quot;\\cyrchar\\CYRA&quot;:&quot;\u0410&quot;,&quot;\\cyrchar\\CYRB&quot;:&quot;\u0411&quot;,&quot;\\cyrchar\\CYRV&quot;:&quot;\u0412&quot;,&quot;\\cyrchar\\CYRG&quot;:&quot;\u0413&quot;,&quot;\\cyrchar\\CYRD&quot;:&quot;\u0414&quot;,&quot;\\cyrchar\\CYRE&quot;:&quot;\u0415&quot;,&quot;\\cyrchar\\CYRZH&quot;:&quot;\u0416&quot;,&quot;\\cyrchar\\CYRZ&quot;:&quot;\u0417&quot;,&quot;\\cyrchar\\CYRI&quot;:&quot;\u0418&quot;,&quot;\\cyrchar\\CYRISHRT&quot;:&quot;\u0419&quot;,&quot;\\cyrchar\\CYRK&quot;:&quot;\u041A&quot;,&quot;\\cyrchar\\CYRL&quot;:&quot;\u041B&quot;,&quot;\\cyrchar\\CYRM&quot;:&quot;\u041C&quot;,&quot;\\cyrchar\\CYRN&quot;:&quot;\u041D&quot;,&quot;\\cyrchar\\CYRO&quot;:&quot;\u041E&quot;,&quot;\\cyrchar\\CYRP&quot;:&quot;\u041F&quot;,&quot;\\cyrchar\\CYRR&quot;:&quot;\u0420&quot;,&quot;\\cyrchar\\CYRS&quot;:&quot;\u0421&quot;,&quot;\\cyrchar\\CYRT&quot;:&quot;\u0422&quot;,&quot;\\cyrchar\\CYRU&quot;:&quot;\u0423&quot;,&quot;\\cyrchar\\CYRF&quot;:&quot;\u0424&quot;,&quot;\\cyrchar\\CYRH&quot;:&quot;\u0425&quot;,&quot;\\cyrchar\\CYRC&quot;:&quot;\u0426&quot;,&quot;\\cyrchar\\CYRCH&quot;:&quot;\u0427&quot;,&quot;\\cyrchar\\CYRSH&quot;:&quot;\u0428&quot;,&quot;\\cyrchar\\CYRSHCH&quot;:&quot;\u0429&quot;,&quot;\\cyrchar\\CYRHRDSN&quot;:&quot;\u042A&quot;,&quot;\\cyrchar\\CYRERY&quot;:&quot;\u042B&quot;,&quot;\\cyrchar\\CYRSFTSN&quot;:&quot;\u042C&quot;,&quot;\\cyrchar\\CYREREV&quot;:&quot;\u042D&quot;,&quot;\\cyrchar\\CYRYU&quot;:&quot;\u042E&quot;,&quot;\\cyrchar\\CYRYA&quot;:&quot;\u042F&quot;,&quot;\\cyrchar\\cyra&quot;:&quot;\u0430&quot;,&quot;\\cyrchar\\cyrb&quot;:&quot;\u0431&quot;,&quot;\\cyrchar\\cyrv&quot;:&quot;\u0432&quot;,&quot;\\cyrchar\\cyrg&quot;:&quot;\u0433&quot;,&quot;\\cyrchar\\cyrd&quot;:&quot;\u0434&quot;,&quot;\\cyrchar\\cyre&quot;:&quot;\u0435&quot;,&quot;\\cyrchar\\cyrzh&quot;:&quot;\u0436&quot;,&quot;\\cyrchar\\cyrz&quot;:&quot;\u0437&quot;,&quot;\\cyrchar\\cyri&quot;:&quot;\u0438&quot;,&quot;\\cyrchar\\cyrishrt&quot;:&quot;\u0439&quot;,&quot;\\cyrchar\\cyrk&quot;:&quot;\u043A&quot;,&quot;\\cyrchar\\cyrl&quot;:&quot;\u043B&quot;,&quot;\\cyrchar\\cyrm&quot;:&quot;\u043C&quot;,&quot;\\cyrchar\\cyrn&quot;:&quot;\u043D&quot;,&quot;\\cyrchar\\cyro&quot;:&quot;\u043E&quot;,&quot;\\cyrchar\\cyrp&quot;:&quot;\u043F&quot;,&quot;\\cyrchar\\cyrr&quot;:&quot;\u0440&quot;,&quot;\\cyrchar\\cyrs&quot;:&quot;\u0441&quot;,&quot;\\cyrchar\\cyrt&quot;:&quot;\u0442&quot;,&quot;\\cyrchar\\cyru&quot;:&quot;\u0443&quot;,&quot;\\cyrchar\\cyrf&quot;:&quot;\u0444&quot;,&quot;\\cyrchar\\cyrh&quot;:&quot;\u0445&quot;,&quot;\\cyrchar\\cyrc&quot;:&quot;\u0446&quot;,&quot;\\cyrchar\\cyrch&quot;:&quot;\u0447&quot;,&quot;\\cyrchar\\cyrsh&quot;:&quot;\u0448&quot;,&quot;\\cyrchar\\cyrshch&quot;:&quot;\u0449&quot;,&quot;\\cyrchar\\cyrhrdsn&quot;:&quot;\u044A&quot;,&quot;\\cyrchar\\cyrery&quot;:&quot;\u044B&quot;,&quot;\\cyrchar\\cyrsftsn&quot;:&quot;\u044C&quot;,&quot;\\cyrchar\\cyrerev&quot;:&quot;\u044D&quot;,&quot;\\cyrchar\\cyryu&quot;:&quot;\u044E&quot;,&quot;\\cyrchar\\cyrya&quot;:&quot;\u044F&quot;,&quot;\\cyrchar\\cyryo&quot;:&quot;\u0451&quot;,&quot;\\cyrchar\\cyrdje&quot;:&quot;\u0452&quot;,&quot;\\cyrchar{\\&#39;\\cyrg}&quot;:&quot;\u0453&quot;,&quot;\\cyrchar\\cyrie&quot;:&quot;\u0454&quot;,&quot;\\cyrchar\\cyrdze&quot;:&quot;\u0455&quot;,&quot;\\cyrchar\\cyrii&quot;:&quot;\u0456&quot;,&quot;\\cyrchar\\cyryi&quot;:&quot;\u0457&quot;,&quot;\\cyrchar\\cyrje&quot;:&quot;\u0458&quot;,&quot;\\cyrchar\\cyrlje&quot;:&quot;\u0459&quot;,&quot;\\cyrchar\\cyrnje&quot;:&quot;\u045A&quot;,&quot;\\cyrchar\\cyrtshe&quot;:&quot;\u045B&quot;,&quot;\\cyrchar{\\&#39;\\cyrk}&quot;:&quot;\u045C&quot;,&quot;\\cyrchar\\cyrushrt&quot;:&quot;\u045E&quot;,&quot;\\cyrchar\\cyrdzhe&quot;:&quot;\u045F&quot;,&quot;\\cyrchar\\CYROMEGA&quot;:&quot;\u0460&quot;,&quot;\\cyrchar\\cyromega&quot;:&quot;\u0461&quot;,&quot;\\cyrchar\\CYRYAT&quot;:&quot;\u0462&quot;,&quot;\\cyrchar\\CYRIOTE&quot;:&quot;\u0464&quot;,&quot;\\cyrchar\\cyriote&quot;:&quot;\u0465&quot;,&quot;\\cyrchar\\CYRLYUS&quot;:&quot;\u0466&quot;,&quot;\\cyrchar\\cyrlyus&quot;:&quot;\u0467&quot;,&quot;\\cyrchar\\CYRIOTLYUS&quot;:&quot;\u0468&quot;,&quot;\\cyrchar\\cyriotlyus&quot;:&quot;\u0469&quot;,&quot;\\cyrchar\\CYRBYUS&quot;:&quot;\u046A&quot;,&quot;\\cyrchar\\CYRIOTBYUS&quot;:&quot;\u046C&quot;,&quot;\\cyrchar\\cyriotbyus&quot;:&quot;\u046D&quot;,&quot;\\cyrchar\\CYRKSI&quot;:&quot;\u046E&quot;,&quot;\\cyrchar\\cyrksi&quot;:&quot;\u046F&quot;,&quot;\\cyrchar\\CYRPSI&quot;:&quot;\u0470&quot;,&quot;\\cyrchar\\cyrpsi&quot;:&quot;\u0471&quot;,&quot;\\cyrchar\\CYRFITA&quot;:&quot;\u0472&quot;,&quot;\\cyrchar\\CYRIZH&quot;:&quot;\u0474&quot;,&quot;\\cyrchar\\CYRUK&quot;:&quot;\u0478&quot;,&quot;\\cyrchar\\cyruk&quot;:&quot;\u0479&quot;,&quot;\\cyrchar\\CYROMEGARND&quot;:&quot;\u047A&quot;,&quot;\\cyrchar\\cyromegarnd&quot;:&quot;\u047B&quot;,&quot;\\cyrchar\\CYROMEGATITLO&quot;:&quot;\u047C&quot;,&quot;\\cyrchar\\cyromegatitlo&quot;:&quot;\u047D&quot;,&quot;\\cyrchar\\CYROT&quot;:&quot;\u047E&quot;,&quot;\\cyrchar\\cyrot&quot;:&quot;\u047F&quot;,&quot;\\cyrchar\\CYRKOPPA&quot;:&quot;\u0480&quot;,&quot;\\cyrchar\\cyrkoppa&quot;:&quot;\u0481&quot;,&quot;\\cyrchar\\cyrthousands&quot;:&quot;\u0482&quot;,&quot;\\cyrchar\\cyrhundredthousands&quot;:&quot;\u0488&quot;,&quot;\\cyrchar\\cyrmillions&quot;:&quot;\u0489&quot;,&quot;\\cyrchar\\CYRSEMISFTSN&quot;:&quot;\u048C&quot;,&quot;\\cyrchar\\cyrsemisftsn&quot;:&quot;\u048D&quot;,&quot;\\cyrchar\\CYRRTICK&quot;:&quot;\u048E&quot;,&quot;\\cyrchar\\cyrrtick&quot;:&quot;\u048F&quot;,&quot;\\cyrchar\\CYRGUP&quot;:&quot;\u0490&quot;,&quot;\\cyrchar\\cyrgup&quot;:&quot;\u0491&quot;,&quot;\\cyrchar\\CYRGHCRS&quot;:&quot;\u0492&quot;,&quot;\\cyrchar\\cyrghcrs&quot;:&quot;\u0493&quot;,&quot;\\cyrchar\\CYRGHK&quot;:&quot;\u0494&quot;,&quot;\\cyrchar\\cyrghk&quot;:&quot;\u0495&quot;,&quot;\\cyrchar\\CYRZHDSC&quot;:&quot;\u0496&quot;,&quot;\\cyrchar\\cyrzhdsc&quot;:&quot;\u0497&quot;,&quot;\\cyrchar\\CYRZDSC&quot;:&quot;\u0498&quot;,&quot;\\cyrchar\\cyrzdsc&quot;:&quot;\u0499&quot;,&quot;\\cyrchar\\CYRKDSC&quot;:&quot;\u049A&quot;,&quot;\\cyrchar\\cyrkdsc&quot;:&quot;\u049B&quot;,&quot;\\cyrchar\\CYRKVCRS&quot;:&quot;\u049C&quot;,&quot;\\cyrchar\\cyrkvcrs&quot;:&quot;\u049D&quot;,&quot;\\cyrchar\\CYRKHCRS&quot;:&quot;\u049E&quot;,&quot;\\cyrchar\\cyrkhcrs&quot;:&quot;\u049F&quot;,&quot;\\cyrchar\\CYRKBEAK&quot;:&quot;\u04A0&quot;,&quot;\\cyrchar\\cyrkbeak&quot;:&quot;\u04A1&quot;,&quot;\\cyrchar\\CYRNDSC&quot;:&quot;\u04A2&quot;,&quot;\\cyrchar\\cyrndsc&quot;:&quot;\u04A3&quot;,&quot;\\cyrchar\\CYRNG&quot;:&quot;\u04A4&quot;,&quot;\\cyrchar\\cyrng&quot;:&quot;\u04A5&quot;,&quot;\\cyrchar\\CYRPHK&quot;:&quot;\u04A6&quot;,&quot;\\cyrchar\\cyrphk&quot;:&quot;\u04A7&quot;,&quot;\\cyrchar\\CYRABHHA&quot;:&quot;\u04A8&quot;,&quot;\\cyrchar\\cyrabhha&quot;:&quot;\u04A9&quot;,&quot;\\cyrchar\\CYRSDSC&quot;:&quot;\u04AA&quot;,&quot;\\cyrchar\\cyrsdsc&quot;:&quot;\u04AB&quot;,&quot;\\cyrchar\\CYRTDSC&quot;:&quot;\u04AC&quot;,&quot;\\cyrchar\\cyrtdsc&quot;:&quot;\u04AD&quot;,&quot;\\cyrchar\\CYRY&quot;:&quot;\u04AE&quot;,&quot;\\cyrchar\\cyry&quot;:&quot;\u04AF&quot;,&quot;\\cyrchar\\CYRYHCRS&quot;:&quot;\u04B0&quot;,&quot;\\cyrchar\\cyryhcrs&quot;:&quot;\u04B1&quot;,&quot;\\cyrchar\\CYRHDSC&quot;:&quot;\u04B2&quot;,&quot;\\cyrchar\\cyrhdsc&quot;:&quot;\u04B3&quot;,&quot;\\cyrchar\\CYRTETSE&quot;:&quot;\u04B4&quot;,&quot;\\cyrchar\\cyrtetse&quot;:&quot;\u04B5&quot;,&quot;\\cyrchar\\CYRCHRDSC&quot;:&quot;\u04B6&quot;,&quot;\\cyrchar\\cyrchrdsc&quot;:&quot;\u04B7&quot;,&quot;\\cyrchar\\CYRCHVCRS&quot;:&quot;\u04B8&quot;,&quot;\\cyrchar\\cyrchvcrs&quot;:&quot;\u04B9&quot;,&quot;\\cyrchar\\CYRSHHA&quot;:&quot;\u04BA&quot;,&quot;\\cyrchar\\cyrshha&quot;:&quot;\u04BB&quot;,&quot;\\cyrchar\\CYRABHCH&quot;:&quot;\u04BC&quot;,&quot;\\cyrchar\\cyrabhch&quot;:&quot;\u04BD&quot;,&quot;\\cyrchar\\CYRABHCHDSC&quot;:&quot;\u04BE&quot;,&quot;\\cyrchar\\cyrabhchdsc&quot;:&quot;\u04BF&quot;,&quot;\\cyrchar\\CYRpalochka&quot;:&quot;\u04C0&quot;,&quot;\\cyrchar\\CYRKHK&quot;:&quot;\u04C3&quot;,&quot;\\cyrchar\\cyrkhk&quot;:&quot;\u04C4&quot;,&quot;\\cyrchar\\CYRNHK&quot;:&quot;\u04C7&quot;,&quot;\\cyrchar\\cyrnhk&quot;:&quot;\u04C8&quot;,&quot;\\cyrchar\\CYRCHLDSC&quot;:&quot;\u04CB&quot;,&quot;\\cyrchar\\cyrchldsc&quot;:&quot;\u04CC&quot;,&quot;\\cyrchar\\CYRAE&quot;:&quot;\u04D4&quot;,&quot;\\cyrchar\\cyrae&quot;:&quot;\u04D5&quot;,&quot;\\cyrchar\\CYRSCHWA&quot;:&quot;\u04D8&quot;,&quot;\\cyrchar\\cyrschwa&quot;:&quot;\u04D9&quot;,&quot;\\cyrchar\\CYRABHDZE&quot;:&quot;\u04E0&quot;,&quot;\\cyrchar\\cyrabhdze&quot;:&quot;\u04E1&quot;,&quot;\\cyrchar\\CYROTLD&quot;:&quot;\u04E8&quot;,&quot;\\cyrchar\\cyrotld&quot;:&quot;\u04E9&quot;,&quot;\\hspace{0.6em}&quot;:&quot;\u2002&quot;,&quot;\\hspace{1em}&quot;:&quot;\u2003&quot;,&quot;\\hspace{0.33em}&quot;:&quot;\u2004&quot;,&quot;\\hspace{0.25em}&quot;:&quot;\u2005&quot;,&quot;\\hspace{0.166em}&quot;:&quot;\u2006&quot;,&quot;\\hphantom{0}&quot;:&quot;\u2007&quot;,&quot;\u2008&quot;:&quot;\\hphantom{,}&quot;,&quot;\\hspace{0.167em}&quot;:&quot;\u2009&quot;,&quot;\u2009-0200A-0200A&quot;:&quot;\\;&quot;,&quot;\\mkern1mu&quot;:&quot;\u200A&quot;,&quot;\\textendash&quot;:&quot;\u2013&quot;,&quot;\\textemdash&quot;:&quot;\u2014&quot;,&quot;\\rule{1em}{1pt}&quot;:&quot;\u2015&quot;,&quot;\\Vert&quot;:&quot;\u2016&quot;,&quot;\\Elzreapos&quot;:&quot;\u201B&quot;,&quot;\\textquotedblleft&quot;:&quot;\u201C&quot;,&quot;\\textquotedblright&quot;:&quot;\u201D&quot;,&quot;\u201E&quot;:&quot;,,&quot;,&quot;\\textdagger&quot;:&quot;\u2020&quot;,&quot;\\textdaggerdbl&quot;:&quot;\u2021&quot;,&quot;\\textbullet&quot;:&quot;\u2022&quot;,&quot;..&quot;:&quot;\u2025&quot;,&quot;\\ldots&quot;:&quot;\u2026&quot;,&quot;\\textperthousand&quot;:&quot;\u2030&quot;,&quot;\\textpertenthousand&quot;:&quot;\u2031&quot;,&quot;{&#39;}&quot;:&quot;\u2032&quot;,&quot;{&#39;&#39;}&quot;:&quot;\u2033&quot;,&quot;{&#39;&#39;&#39;}&quot;:&quot;\u2034&quot;,&quot;\\backprime&quot;:&quot;\u2035&quot;,&quot;\\guilsinglleft&quot;:&quot;\u2039&quot;,&quot;\\guilsinglright&quot;:&quot;\u203A&quot;,&quot;&#39;&#39;&#39;&#39;&quot;:&quot;\u2057&quot;,&quot;\\mkern4mu&quot;:&quot;\u205F&quot;,&quot;\\nolinebreak&quot;:&quot;\u2060&quot;,&quot;\\ensuremath{\\Elzpes}&quot;:&quot;\u20A7&quot;,&quot;\\mbox{\\texteuro}&quot;:&quot;\u20AC&quot;,&quot;\\dddot&quot;:&quot;\u20DB&quot;,&quot;\\ddddot&quot;:&quot;\u20DC&quot;,&quot;\\mathbb{C}&quot;:&quot;\u2102&quot;,&quot;\\mathscr{g}&quot;:&quot;\u210A&quot;,&quot;\\mathscr{H}&quot;:&quot;\u210B&quot;,&quot;\\mathfrak{H}&quot;:&quot;\u210C&quot;,&quot;\\mathbb{H}&quot;:&quot;\u210D&quot;,&quot;\\hslash&quot;:&quot;\u210F&quot;,&quot;\\mathscr{I}&quot;:&quot;\u2110&quot;,&quot;\\mathfrak{I}&quot;:&quot;\u2111&quot;,&quot;\\mathscr{L}&quot;:&quot;\u2112&quot;,&quot;\\mathscr{l}&quot;:&quot;\u2113&quot;,&quot;\\mathbb{N}&quot;:&quot;\u2115&quot;,&quot;\\cyrchar\\textnumero&quot;:&quot;\u2116&quot;,&quot;\\wp&quot;:&quot;\u2118&quot;,&quot;\\mathbb{P}&quot;:&quot;\u2119&quot;,&quot;\\mathbb{Q}&quot;:&quot;\u211A&quot;,&quot;\\mathscr{R}&quot;:&quot;\u211B&quot;,&quot;\\mathfrak{R}&quot;:&quot;\u211C&quot;,&quot;\\mathbb{R}&quot;:&quot;\u211D&quot;,&quot;\\Elzxrat&quot;:&quot;\u211E&quot;,&quot;\\texttrademark&quot;:&quot;\u2122&quot;,&quot;\\mathbb{Z}&quot;:&quot;\u2124&quot;,&quot;\\Omega&quot;:&quot;\u2126&quot;,&quot;\\mho&quot;:&quot;\u2127&quot;,&quot;\\mathfrak{Z}&quot;:&quot;\u2128&quot;,&quot;\\ElsevierGlyph{2129}&quot;:&quot;\u2129&quot;,&quot;\\AA&quot;:&quot;\u212B&quot;,&quot;\\mathscr{B}&quot;:&quot;\u212C&quot;,&quot;\\mathfrak{C}&quot;:&quot;\u212D&quot;,&quot;\\mathscr{e}&quot;:&quot;\u212F&quot;,&quot;\\mathscr{E}&quot;:&quot;\u2130&quot;,&quot;\\mathscr{F}&quot;:&quot;\u2131&quot;,&quot;\\mathscr{M}&quot;:&quot;\u2133&quot;,&quot;\\mathscr{o}&quot;:&quot;\u2134&quot;,&quot;\\aleph&quot;:&quot;\u2135&quot;,&quot;\\beth&quot;:&quot;\u2136&quot;,&quot;\\gimel&quot;:&quot;\u2137&quot;,&quot;\\daleth&quot;:&quot;\u2138&quot;,&quot;\\textfrac{1}{3}&quot;:&quot;\u2153&quot;,&quot;\\textfrac{2}{3}&quot;:&quot;\u2154&quot;,&quot;\\textfrac{1}{5}&quot;:&quot;\u2155&quot;,&quot;\\textfrac{2}{5}&quot;:&quot;\u2156&quot;,&quot;\\textfrac{3}{5}&quot;:&quot;\u2157&quot;,&quot;\\textfrac{4}{5}&quot;:&quot;\u2158&quot;,&quot;\\textfrac{1}{6}&quot;:&quot;\u2159&quot;,&quot;\\textfrac{5}{6}&quot;:&quot;\u215A&quot;,&quot;\\textfrac{1}{8}&quot;:&quot;\u215B&quot;,&quot;\\textfrac{3}{8}&quot;:&quot;\u215C&quot;,&quot;\\textfrac{5}{8}&quot;:&quot;\u215D&quot;,&quot;\\textfrac{7}{8}&quot;:&quot;\u215E&quot;,&quot;\\leftarrow&quot;:&quot;\u2190&quot;,&quot;\\uparrow&quot;:&quot;\u2191&quot;,&quot;\\rightarrow&quot;:&quot;\u2192&quot;,&quot;\\downarrow&quot;:&quot;\u2193&quot;,&quot;\\leftrightarrow&quot;:&quot;\u2194&quot;,&quot;\\updownarrow&quot;:&quot;\u2195&quot;,&quot;\\nwarrow&quot;:&quot;\u2196&quot;,&quot;\\nearrow&quot;:&quot;\u2197&quot;,&quot;\\searrow&quot;:&quot;\u2198&quot;,&quot;\\swarrow&quot;:&quot;\u2199&quot;,&quot;\\nleftarrow&quot;:&quot;\u219A&quot;,&quot;\\nrightarrow&quot;:&quot;\u219B&quot;,&quot;\\arrowwaveright&quot;:&quot;\u219C&quot;,&quot;\\arrowwaveright&quot;:&quot;\u219D&quot;,&quot;\\twoheadleftarrow&quot;:&quot;\u219E&quot;,&quot;\\twoheadrightarrow&quot;:&quot;\u21A0&quot;,&quot;\\leftarrowtail&quot;:&quot;\u21A2&quot;,&quot;\\rightarrowtail&quot;:&quot;\u21A3&quot;,&quot;\\mapsto&quot;:&quot;\u21A6&quot;,&quot;\\hookleftarrow&quot;:&quot;\u21A9&quot;,&quot;\\hookrightarrow&quot;:&quot;\u21AA&quot;,&quot;\\looparrowleft&quot;:&quot;\u21AB&quot;,&quot;\\looparrowright&quot;:&quot;\u21AC&quot;,&quot;\\leftrightsquigarrow&quot;:&quot;\u21AD&quot;,&quot;\\nleftrightarrow&quot;:&quot;\u21AE&quot;,&quot;\\Lsh&quot;:&quot;\u21B0&quot;,&quot;\\Rsh&quot;:&quot;\u21B1&quot;,&quot;\\ElsevierGlyph{21B3}&quot;:&quot;\u21B3&quot;,&quot;\\curvearrowleft&quot;:&quot;\u21B6&quot;,&quot;\\curvearrowright&quot;:&quot;\u21B7&quot;,&quot;\\circlearrowleft&quot;:&quot;\u21BA&quot;,&quot;\\circlearrowright&quot;:&quot;\u21BB&quot;,&quot;\\leftharpoonup&quot;:&quot;\u21BC&quot;,&quot;\\leftharpoondown&quot;:&quot;\u21BD&quot;,&quot;\\upharpoonright&quot;:&quot;\u21BE&quot;,&quot;\\upharpoonleft&quot;:&quot;\u21BF&quot;,&quot;\\rightharpoonup&quot;:&quot;\u21C0&quot;,&quot;\\rightharpoondown&quot;:&quot;\u21C1&quot;,&quot;\\downharpoonright&quot;:&quot;\u21C2&quot;,&quot;\\downharpoonleft&quot;:&quot;\u21C3&quot;,&quot;\\rightleftarrows&quot;:&quot;\u21C4&quot;,&quot;\\dblarrowupdown&quot;:&quot;\u21C5&quot;,&quot;\\leftrightarrows&quot;:&quot;\u21C6&quot;,&quot;\\leftleftarrows&quot;:&quot;\u21C7&quot;,&quot;\\upuparrows&quot;:&quot;\u21C8&quot;,&quot;\\rightrightarrows&quot;:&quot;\u21C9&quot;,&quot;\\downdownarrows&quot;:&quot;\u21CA&quot;,&quot;\\leftrightharpoons&quot;:&quot;\u21CB&quot;,&quot;\\rightleftharpoons&quot;:&quot;\u21CC&quot;,&quot;\\nLeftarrow&quot;:&quot;\u21CD&quot;,&quot;\\nLeftrightarrow&quot;:&quot;\u21CE&quot;,&quot;\\nRightarrow&quot;:&quot;\u21CF&quot;,&quot;\\Leftarrow&quot;:&quot;\u21D0&quot;,&quot;\\Uparrow&quot;:&quot;\u21D1&quot;,&quot;\\Rightarrow&quot;:&quot;\u21D2&quot;,&quot;\\Downarrow&quot;:&quot;\u21D3&quot;,&quot;\\Leftrightarrow&quot;:&quot;\u21D4&quot;,&quot;\\Updownarrow&quot;:&quot;\u21D5&quot;,&quot;\\Lleftarrow&quot;:&quot;\u21DA&quot;,&quot;\\Rrightarrow&quot;:&quot;\u21DB&quot;,&quot;\\rightsquigarrow&quot;:&quot;\u21DD&quot;,&quot;\\DownArrowUpArrow&quot;:&quot;\u21F5&quot;,&quot;\\forall&quot;:&quot;\u2200&quot;,&quot;\\complement&quot;:&quot;\u2201&quot;,&quot;\\partial&quot;:&quot;\u2202&quot;,&quot;\\exists&quot;:&quot;\u2203&quot;,&quot;\\nexists&quot;:&quot;\u2204&quot;,&quot;\\varnothing&quot;:&quot;\u2205&quot;,&quot;\\nabla&quot;:&quot;\u2207&quot;,&quot;\\in&quot;:&quot;\u2208&quot;,&quot;\\not\\in&quot;:&quot;\u2209&quot;,&quot;\\ni&quot;:&quot;\u220B&quot;,&quot;\\not\\ni&quot;:&quot;\u220C&quot;,&quot;\\prod&quot;:&quot;\u220F&quot;,&quot;\\coprod&quot;:&quot;\u2210&quot;,&quot;\\sum&quot;:&quot;\u2211&quot;,&quot;\\mp&quot;:&quot;\u2213&quot;,&quot;\\dotplus&quot;:&quot;\u2214&quot;,&quot;\\setminus&quot;:&quot;\u2216&quot;,&quot;{_\\ast}&quot;:&quot;\u2217&quot;,&quot;\\circ&quot;:&quot;\u2218&quot;,&quot;\\bullet&quot;:&quot;\u2219&quot;,&quot;\\surd&quot;:&quot;\u221A&quot;,&quot;\\propto&quot;:&quot;\u221D&quot;,&quot;\\infty&quot;:&quot;\u221E&quot;,&quot;\\rightangle&quot;:&quot;\u221F&quot;,&quot;\\angle&quot;:&quot;\u2220&quot;,&quot;\\measuredangle&quot;:&quot;\u2221&quot;,&quot;\\sphericalangle&quot;:&quot;\u2222&quot;,&quot;\\mid&quot;:&quot;\u2223&quot;,&quot;\\nmid&quot;:&quot;\u2224&quot;,&quot;\\parallel&quot;:&quot;\u2225&quot;,&quot;\\nparallel&quot;:&quot;\u2226&quot;,&quot;\\wedge&quot;:&quot;\u2227&quot;,&quot;\\vee&quot;:&quot;\u2228&quot;,&quot;\\cap&quot;:&quot;\u2229&quot;,&quot;\\cup&quot;:&quot;\u222A&quot;,&quot;\\int&quot;:&quot;\u222B&quot;,&quot;\u222C&quot;:&quot;\\int\\!\\int&quot;,&quot;\u222D&quot;:&quot;\\int\\!\\int\\!\\int&quot;,&quot;\\oint&quot;:&quot;\u222E&quot;,&quot;\\surfintegral&quot;:&quot;\u222F&quot;,&quot;\\volintegral&quot;:&quot;\u2230&quot;,&quot;\\clwintegral&quot;:&quot;\u2231&quot;,&quot;\\ElsevierGlyph{2232}&quot;:&quot;\u2232&quot;,&quot;\\ElsevierGlyph{2233}&quot;:&quot;\u2233&quot;,&quot;\\therefore&quot;:&quot;\u2234&quot;,&quot;\\because&quot;:&quot;\u2235&quot;,&quot;\\Colon&quot;:&quot;\u2237&quot;,&quot;\\ElsevierGlyph{2238}&quot;:&quot;\u2238&quot;,&quot;\u223A&quot;:&quot;\\mathbin{{:}\\!\\!{-}\\!\\!{:}}&quot;,&quot;\\homothetic&quot;:&quot;\u223B&quot;,&quot;\\sim&quot;:&quot;\u223C&quot;,&quot;\\backsim&quot;:&quot;\u223D&quot;,&quot;\\lazysinv&quot;:&quot;\u223E&quot;,&quot;\\wr&quot;:&quot;\u2240&quot;,&quot;\\not\\sim&quot;:&quot;\u2241&quot;,&quot;\\ElsevierGlyph{2242}&quot;:&quot;\u2242&quot;,&quot;\u2242-00338&quot;:&quot;\\NotEqualTilde&quot;,&quot;\\simeq&quot;:&quot;\u2243&quot;,&quot;\\not\\simeq&quot;:&quot;\u2244&quot;,&quot;\\cong&quot;:&quot;\u2245&quot;,&quot;\\approxnotequal&quot;:&quot;\u2246&quot;,&quot;\\not\\cong&quot;:&quot;\u2247&quot;,&quot;\\approx&quot;:&quot;\u2248&quot;,&quot;\\not\\approx&quot;:&quot;\u2249&quot;,&quot;\\approxeq&quot;:&quot;\u224A&quot;,&quot;\\tildetrpl&quot;:&quot;\u224B&quot;,&quot;\u224B-00338&quot;:&quot;\\not\\apid&quot;,&quot;\\allequal&quot;:&quot;\u224C&quot;,&quot;\\asymp&quot;:&quot;\u224D&quot;,&quot;\\Bumpeq&quot;:&quot;\u224E&quot;,&quot;\u224E-00338&quot;:&quot;\\NotHumpDownHump&quot;,&quot;\\bumpeq&quot;:&quot;\u224F&quot;,&quot;\u224F-00338&quot;:&quot;\\NotHumpEqual&quot;,&quot;\\doteq&quot;:&quot;\u2250&quot;,&quot;\u2250-00338&quot;:&quot;\\not\\doteq&quot;,&quot;\\doteqdot&quot;:&quot;\u2251&quot;,&quot;\\fallingdotseq&quot;:&quot;\u2252&quot;,&quot;\\risingdotseq&quot;:&quot;\u2253&quot;,&quot;\u2254&quot;:&quot;:=&quot;,&quot;\u2255&quot;:&quot;=:&quot;,&quot;\\eqcirc&quot;:&quot;\u2256&quot;,&quot;\\circeq&quot;:&quot;\u2257&quot;,&quot;\\estimates&quot;:&quot;\u2259&quot;,&quot;\\ElsevierGlyph{225A}&quot;:&quot;\u225A&quot;,&quot;\\starequal&quot;:&quot;\u225B&quot;,&quot;\\triangleq&quot;:&quot;\u225C&quot;,&quot;\\ElsevierGlyph{225F}&quot;:&quot;\u225F&quot;,&quot;\\not=&quot;:&quot;\u2260&quot;,&quot;\\equiv&quot;:&quot;\u2261&quot;,&quot;\\not\\equiv&quot;:&quot;\u2262&quot;,&quot;\\leq&quot;:&quot;\u2264&quot;,&quot;\\geq&quot;:&quot;\u2265&quot;,&quot;\\leqq&quot;:&quot;\u2266&quot;,&quot;\\geqq&quot;:&quot;\u2267&quot;,&quot;\\lneqq&quot;:&quot;\u2268&quot;,&quot;\u2268-0FE00&quot;:&quot;\\lvertneqq&quot;,&quot;\\gneqq&quot;:&quot;\u2269&quot;,&quot;\u2269-0FE00&quot;:&quot;\\gvertneqq&quot;,&quot;\\ll&quot;:&quot;\u226A&quot;,&quot;\u226A-00338&quot;:&quot;\\NotLessLess&quot;,&quot;\\gg&quot;:&quot;\u226B&quot;,&quot;\u226B-00338&quot;:&quot;\\NotGreaterGreater&quot;,&quot;\\between&quot;:&quot;\u226C&quot;,&quot;\u226D&quot;:&quot;\\not\\kern-0.3em\\times&quot;,&quot;\u226E&quot;:&quot;\\not&amp;lt;&quot;,&quot;\u226F&quot;:&quot;\\not&amp;gt;&quot;,&quot;\\not\\leq&quot;:&quot;\u2270&quot;,&quot;\\not\\geq&quot;:&quot;\u2271&quot;,&quot;\\lessequivlnt&quot;:&quot;\u2272&quot;,&quot;\\greaterequivlnt&quot;:&quot;\u2273&quot;,&quot;\\ElsevierGlyph{2274}&quot;:&quot;\u2274&quot;,&quot;\\ElsevierGlyph{2275}&quot;:&quot;\u2275&quot;,&quot;\\lessgtr&quot;:&quot;\u2276&quot;,&quot;\\gtrless&quot;:&quot;\u2277&quot;,&quot;\\notlessgreater&quot;:&quot;\u2278&quot;,&quot;\\notgreaterless&quot;:&quot;\u2279&quot;,&quot;\\prec&quot;:&quot;\u227A&quot;,&quot;\\succ&quot;:&quot;\u227B&quot;,&quot;\\preccurlyeq&quot;:&quot;\u227C&quot;,&quot;\\succcurlyeq&quot;:&quot;\u227D&quot;,&quot;\\precapprox&quot;:&quot;\u227E&quot;,&quot;\u227E-00338&quot;:&quot;\\NotPrecedesTilde&quot;,&quot;\\succapprox&quot;:&quot;\u227F&quot;,&quot;\u227F-00338&quot;:&quot;\\NotSucceedsTilde&quot;,&quot;\\not\\prec&quot;:&quot;\u2280&quot;,&quot;\\not\\succ&quot;:&quot;\u2281&quot;,&quot;\\subset&quot;:&quot;\u2282&quot;,&quot;\\supset&quot;:&quot;\u2283&quot;,&quot;\\not\\subset&quot;:&quot;\u2284&quot;,&quot;\\not\\supset&quot;:&quot;\u2285&quot;,&quot;\\subseteq&quot;:&quot;\u2286&quot;,&quot;\\supseteq&quot;:&quot;\u2287&quot;,&quot;\\not\\subseteq&quot;:&quot;\u2288&quot;,&quot;\\not\\supseteq&quot;:&quot;\u2289&quot;,&quot;\\subsetneq&quot;:&quot;\u228A&quot;,&quot;\u228A-0FE00&quot;:&quot;\\varsubsetneqq&quot;,&quot;\\supsetneq&quot;:&quot;\u228B&quot;,&quot;\u228B-0FE00&quot;:&quot;\\varsupsetneq&quot;,&quot;\\uplus&quot;:&quot;\u228E&quot;,&quot;\\sqsubset&quot;:&quot;\u228F&quot;,&quot;\u228F-00338&quot;:&quot;\\NotSquareSubset&quot;,&quot;\\sqsupset&quot;:&quot;\u2290&quot;,&quot;\u2290-00338&quot;:&quot;\\NotSquareSuperset&quot;,&quot;\\sqsubseteq&quot;:&quot;\u2291&quot;,&quot;\\sqsupseteq&quot;:&quot;\u2292&quot;,&quot;\\sqcap&quot;:&quot;\u2293&quot;,&quot;\\sqcup&quot;:&quot;\u2294&quot;,&quot;\\oplus&quot;:&quot;\u2295&quot;,&quot;\\ominus&quot;:&quot;\u2296&quot;,&quot;\\otimes&quot;:&quot;\u2297&quot;,&quot;\\oslash&quot;:&quot;\u2298&quot;,&quot;\\odot&quot;:&quot;\u2299&quot;,&quot;\\circledcirc&quot;:&quot;\u229A&quot;,&quot;\\circledast&quot;:&quot;\u229B&quot;,&quot;\\circleddash&quot;:&quot;\u229D&quot;,&quot;\\boxplus&quot;:&quot;\u229E&quot;,&quot;\\boxminus&quot;:&quot;\u229F&quot;,&quot;\\boxtimes&quot;:&quot;\u22A0&quot;,&quot;\\boxdot&quot;:&quot;\u22A1&quot;,&quot;\\vdash&quot;:&quot;\u22A2&quot;,&quot;\\dashv&quot;:&quot;\u22A3&quot;,&quot;\\top&quot;:&quot;\u22A4&quot;,&quot;\\perp&quot;:&quot;\u22A5&quot;,&quot;\\truestate&quot;:&quot;\u22A7&quot;,&quot;\\forcesextra&quot;:&quot;\u22A8&quot;,&quot;\\Vdash&quot;:&quot;\u22A9&quot;,&quot;\\Vvdash&quot;:&quot;\u22AA&quot;,&quot;\\VDash&quot;:&quot;\u22AB&quot;,&quot;\\nvdash&quot;:&quot;\u22AC&quot;,&quot;\\nvDash&quot;:&quot;\u22AD&quot;,&quot;\\nVdash&quot;:&quot;\u22AE&quot;,&quot;\\nVDash&quot;:&quot;\u22AF&quot;,&quot;\\vartriangleleft&quot;:&quot;\u22B2&quot;,&quot;\\vartriangleright&quot;:&quot;\u22B3&quot;,&quot;\\trianglelefteq&quot;:&quot;\u22B4&quot;,&quot;\\trianglerighteq&quot;:&quot;\u22B5&quot;,&quot;\\original&quot;:&quot;\u22B6&quot;,&quot;\\image&quot;:&quot;\u22B7&quot;,&quot;\\multimap&quot;:&quot;\u22B8&quot;,&quot;\\hermitconjmatrix&quot;:&quot;\u22B9&quot;,&quot;\\intercal&quot;:&quot;\u22BA&quot;,&quot;\\veebar&quot;:&quot;\u22BB&quot;,&quot;\\rightanglearc&quot;:&quot;\u22BE&quot;,&quot;\\ElsevierGlyph{22C0}&quot;:&quot;\u22C0&quot;,&quot;\\ElsevierGlyph{22C1}&quot;:&quot;\u22C1&quot;,&quot;\\bigcap&quot;:&quot;\u22C2&quot;,&quot;\\bigcup&quot;:&quot;\u22C3&quot;,&quot;\\diamond&quot;:&quot;\u22C4&quot;,&quot;\\cdot&quot;:&quot;\u22C5&quot;,&quot;\\star&quot;:&quot;\u22C6&quot;,&quot;\\divideontimes&quot;:&quot;\u22C7&quot;,&quot;\\bowtie&quot;:&quot;\u22C8&quot;,&quot;\\ltimes&quot;:&quot;\u22C9&quot;,&quot;\\rtimes&quot;:&quot;\u22CA&quot;,&quot;\\leftthreetimes&quot;:&quot;\u22CB&quot;,&quot;\\rightthreetimes&quot;:&quot;\u22CC&quot;,&quot;\\backsimeq&quot;:&quot;\u22CD&quot;,&quot;\\curlyvee&quot;:&quot;\u22CE&quot;,&quot;\\curlywedge&quot;:&quot;\u22CF&quot;,&quot;\\Subset&quot;:&quot;\u22D0&quot;,&quot;\\Supset&quot;:&quot;\u22D1&quot;,&quot;\\Cap&quot;:&quot;\u22D2&quot;,&quot;\\Cup&quot;:&quot;\u22D3&quot;,&quot;\\pitchfork&quot;:&quot;\u22D4&quot;,&quot;\\lessdot&quot;:&quot;\u22D6&quot;,&quot;\\gtrdot&quot;:&quot;\u22D7&quot;,&quot;\\verymuchless&quot;:&quot;\u22D8&quot;,&quot;\\verymuchgreater&quot;:&quot;\u22D9&quot;,&quot;\\lesseqgtr&quot;:&quot;\u22DA&quot;,&quot;\\gtreqless&quot;:&quot;\u22DB&quot;,&quot;\\curlyeqprec&quot;:&quot;\u22DE&quot;,&quot;\\curlyeqsucc&quot;:&quot;\u22DF&quot;,&quot;\\not\\sqsubseteq&quot;:&quot;\u22E2&quot;,&quot;\\not\\sqsupseteq&quot;:&quot;\u22E3&quot;,&quot;\\Elzsqspne&quot;:&quot;\u22E5&quot;,&quot;\\lnsim&quot;:&quot;\u22E6&quot;,&quot;\\gnsim&quot;:&quot;\u22E7&quot;,&quot;\\precedesnotsimilar&quot;:&quot;\u22E8&quot;,&quot;\\succnsim&quot;:&quot;\u22E9&quot;,&quot;\\ntriangleleft&quot;:&quot;\u22EA&quot;,&quot;\\ntriangleright&quot;:&quot;\u22EB&quot;,&quot;\\ntrianglelefteq&quot;:&quot;\u22EC&quot;,&quot;\\ntrianglerighteq&quot;:&quot;\u22ED&quot;,&quot;\\vdots&quot;:&quot;\u22EE&quot;,&quot;\\cdots&quot;:&quot;\u22EF&quot;,&quot;\\upslopeellipsis&quot;:&quot;\u22F0&quot;,&quot;\\downslopeellipsis&quot;:&quot;\u22F1&quot;,&quot;\\barwedge&quot;:&quot;\u2305&quot;,&quot;\\perspcorrespond&quot;:&quot;\u2306&quot;,&quot;\\lceil&quot;:&quot;\u2308&quot;,&quot;\\rceil&quot;:&quot;\u2309&quot;,&quot;\\lfloor&quot;:&quot;\u230A&quot;,&quot;\\rfloor&quot;:&quot;\u230B&quot;,&quot;\\recorder&quot;:&quot;\u2315&quot;,&quot;\\mathchar\&quot;\u2316&quot;:&quot;2208&quot;,&quot;\\ulcorner&quot;:&quot;\u231C&quot;,&quot;\\urcorner&quot;:&quot;\u231D&quot;,&quot;\\llcorner&quot;:&quot;\u231E&quot;,&quot;\\lrcorner&quot;:&quot;\u231F&quot;,&quot;\\frown&quot;:&quot;\u2322&quot;,&quot;\\smile&quot;:&quot;\u2323&quot;,&quot;\\langle&quot;:&quot;\u2329&quot;,&quot;\\rangle&quot;:&quot;\u232A&quot;,&quot;\\ElsevierGlyph{E838}&quot;:&quot;\u233D&quot;,&quot;\\Elzdlcorn&quot;:&quot;\u23A3&quot;,&quot;\\lmoustache&quot;:&quot;\u23B0&quot;,&quot;\\rmoustache&quot;:&quot;\u23B1&quot;,&quot;\\textvisiblespace&quot;:&quot;\u2423&quot;,&quot;\\ding{172}&quot;:&quot;\u2460&quot;,&quot;\\ding{173}&quot;:&quot;\u2461&quot;,&quot;\\ding{174}&quot;:&quot;\u2462&quot;,&quot;\\ding{175}&quot;:&quot;\u2463&quot;,&quot;\\ding{176}&quot;:&quot;\u2464&quot;,&quot;\\ding{177}&quot;:&quot;\u2465&quot;,&quot;\\ding{178}&quot;:&quot;\u2466&quot;,&quot;\\ding{179}&quot;:&quot;\u2467&quot;,&quot;\\ding{180}&quot;:&quot;\u2468&quot;,&quot;\\ding{181}&quot;:&quot;\u2469&quot;,&quot;\\circledS&quot;:&quot;\u24C8&quot;,&quot;\\Elzdshfnc&quot;:&quot;\u2506&quot;,&quot;\\Elzsqfnw&quot;:&quot;\u2519&quot;,&quot;\\diagup&quot;:&quot;\u2571&quot;,&quot;\\ding{110}&quot;:&quot;\u25A0&quot;,&quot;\\square&quot;:&quot;\u25A1&quot;,&quot;\\blacksquare&quot;:&quot;\u25AA&quot;,&quot;\\fbox{~~}&quot;:&quot;\u25AD&quot;,&quot;\\Elzvrecto&quot;:&quot;\u25AF&quot;,&quot;\\ElsevierGlyph{E381}&quot;:&quot;\u25B1&quot;,&quot;\\ding{115}&quot;:&quot;\u25B2&quot;,&quot;\\bigtriangleup&quot;:&quot;\u25B3&quot;,&quot;\\blacktriangle&quot;:&quot;\u25B4&quot;,&quot;\\vartriangle&quot;:&quot;\u25B5&quot;,&quot;\\blacktriangleright&quot;:&quot;\u25B8&quot;,&quot;\\triangleright&quot;:&quot;\u25B9&quot;,&quot;\\ding{116}&quot;:&quot;\u25BC&quot;,&quot;\\bigtriangledown&quot;:&quot;\u25BD&quot;,&quot;\\blacktriangledown&quot;:&quot;\u25BE&quot;,&quot;\\triangledown&quot;:&quot;\u25BF&quot;,&quot;\\blacktriangleleft&quot;:&quot;\u25C2&quot;,&quot;\\triangleleft&quot;:&quot;\u25C3&quot;,&quot;\\ding{117}&quot;:&quot;\u25C6&quot;,&quot;\\lozenge&quot;:&quot;\u25CA&quot;,&quot;\\bigcirc&quot;:&quot;\u25CB&quot;,&quot;\\ding{108}&quot;:&quot;\u25CF&quot;,&quot;\\Elzcirfl&quot;:&quot;\u25D0&quot;,&quot;\\Elzcirfr&quot;:&quot;\u25D1&quot;,&quot;\\Elzcirfb&quot;:&quot;\u25D2&quot;,&quot;\\ding{119}&quot;:&quot;\u25D7&quot;,&quot;\\Elzrvbull&quot;:&quot;\u25D8&quot;,&quot;\\Elzsqfl&quot;:&quot;\u25E7&quot;,&quot;\\Elzsqfr&quot;:&quot;\u25E8&quot;,&quot;\\Elzsqfse&quot;:&quot;\u25EA&quot;,&quot;\\bigcirc&quot;:&quot;\u25EF&quot;,&quot;\\ding{72}&quot;:&quot;\u2605&quot;,&quot;\\ding{73}&quot;:&quot;\u2606&quot;,&quot;\\ding{37}&quot;:&quot;\u260E&quot;,&quot;\\ding{42}&quot;:&quot;\u261B&quot;,&quot;\\ding{43}&quot;:&quot;\u261E&quot;,&quot;\\rightmoon&quot;:&quot;\u263E&quot;,&quot;\\mercury&quot;:&quot;\u263F&quot;,&quot;\\venus&quot;:&quot;\u2640&quot;,&quot;\\male&quot;:&quot;\u2642&quot;,&quot;\\jupiter&quot;:&quot;\u2643&quot;,&quot;\\saturn&quot;:&quot;\u2644&quot;,&quot;\\uranus&quot;:&quot;\u2645&quot;,&quot;\\neptune&quot;:&quot;\u2646&quot;,&quot;\\pluto&quot;:&quot;\u2647&quot;,&quot;\\aries&quot;:&quot;\u2648&quot;,&quot;\\taurus&quot;:&quot;\u2649&quot;,&quot;\\gemini&quot;:&quot;\u264A&quot;,&quot;\\cancer&quot;:&quot;\u264B&quot;,&quot;\\leo&quot;:&quot;\u264C&quot;,&quot;\\virgo&quot;:&quot;\u264D&quot;,&quot;\\libra&quot;:&quot;\u264E&quot;,&quot;\\scorpio&quot;:&quot;\u264F&quot;,&quot;\\sagittarius&quot;:&quot;\u2650&quot;,&quot;\\capricornus&quot;:&quot;\u2651&quot;,&quot;\\aquarius&quot;:&quot;\u2652&quot;,&quot;\\pisces&quot;:&quot;\u2653&quot;,&quot;\\ding{171}&quot;:&quot;\u2660&quot;,&quot;\\diamond&quot;:&quot;\u2662&quot;,&quot;\\ding{168}&quot;:&quot;\u2663&quot;,&quot;\\ding{170}&quot;:&quot;\u2665&quot;,&quot;\\ding{169}&quot;:&quot;\u2666&quot;,&quot;\\quarternote&quot;:&quot;\u2669&quot;,&quot;\\eighthnote&quot;:&quot;\u266A&quot;,&quot;\\flat&quot;:&quot;\u266D&quot;,&quot;\\natural&quot;:&quot;\u266E&quot;,&quot;\\sharp&quot;:&quot;\u266F&quot;,&quot;\\ding{33}&quot;:&quot;\u2701&quot;,&quot;\\ding{34}&quot;:&quot;\u2702&quot;,&quot;\\ding{35}&quot;:&quot;\u2703&quot;,&quot;\\ding{36}&quot;:&quot;\u2704&quot;,&quot;\\ding{38}&quot;:&quot;\u2706&quot;,&quot;\\ding{39}&quot;:&quot;\u2707&quot;,&quot;\\ding{40}&quot;:&quot;\u2708&quot;,&quot;\\ding{41}&quot;:&quot;\u2709&quot;,&quot;\\ding{44}&quot;:&quot;\u270C&quot;,&quot;\\ding{45}&quot;:&quot;\u270D&quot;,&quot;\\ding{46}&quot;:&quot;\u270E&quot;,&quot;\\ding{47}&quot;:&quot;\u270F&quot;,&quot;\\ding{48}&quot;:&quot;\u2710&quot;,&quot;\\ding{49}&quot;:&quot;\u2711&quot;,&quot;\\ding{50}&quot;:&quot;\u2712&quot;,&quot;\\ding{51}&quot;:&quot;\u2713&quot;,&quot;\\ding{52}&quot;:&quot;\u2714&quot;,&quot;\\ding{53}&quot;:&quot;\u2715&quot;,&quot;\\ding{54}&quot;:&quot;\u2716&quot;,&quot;\\ding{55}&quot;:&quot;\u2717&quot;,&quot;\\ding{56}&quot;:&quot;\u2718&quot;,&quot;\\ding{57}&quot;:&quot;\u2719&quot;,&quot;\\ding{58}&quot;:&quot;\u271A&quot;,&quot;\\ding{59}&quot;:&quot;\u271B&quot;,&quot;\\ding{60}&quot;:&quot;\u271C&quot;,&quot;\\ding{61}&quot;:&quot;\u271D&quot;,&quot;\\ding{62}&quot;:&quot;\u271E&quot;,&quot;\\ding{63}&quot;:&quot;\u271F&quot;,&quot;\\ding{64}&quot;:&quot;\u2720&quot;,&quot;\\ding{65}&quot;:&quot;\u2721&quot;,&quot;\\ding{66}&quot;:&quot;\u2722&quot;,&quot;\\ding{67}&quot;:&quot;\u2723&quot;,&quot;\\ding{68}&quot;:&quot;\u2724&quot;,&quot;\\ding{69}&quot;:&quot;\u2725&quot;,&quot;\\ding{70}&quot;:&quot;\u2726&quot;,&quot;\\ding{71}&quot;:&quot;\u2727&quot;,&quot;\\ding{73}&quot;:&quot;\u2729&quot;,&quot;\\ding{74}&quot;:&quot;\u272A&quot;,&quot;\\ding{75}&quot;:&quot;\u272B&quot;,&quot;\\ding{76}&quot;:&quot;\u272C&quot;,&quot;\\ding{77}&quot;:&quot;\u272D&quot;,&quot;\\ding{78}&quot;:&quot;\u272E&quot;,&quot;\\ding{79}&quot;:&quot;\u272F&quot;,&quot;\\ding{80}&quot;:&quot;\u2730&quot;,&quot;\\ding{81}&quot;:&quot;\u2731&quot;,&quot;\\ding{82}&quot;:&quot;\u2732&quot;,&quot;\\ding{83}&quot;:&quot;\u2733&quot;,&quot;\\ding{84}&quot;:&quot;\u2734&quot;,&quot;\\ding{85}&quot;:&quot;\u2735&quot;,&quot;\\ding{86}&quot;:&quot;\u2736&quot;,&quot;\\ding{87}&quot;:&quot;\u2737&quot;,&quot;\\ding{88}&quot;:&quot;\u2738&quot;,&quot;\\ding{89}&quot;:&quot;\u2739&quot;,&quot;\\ding{90}&quot;:&quot;\u273A&quot;,&quot;\\ding{91}&quot;:&quot;\u273B&quot;,&quot;\\ding{92}&quot;:&quot;\u273C&quot;,&quot;\\ding{93}&quot;:&quot;\u273D&quot;,&quot;\\ding{94}&quot;:&quot;\u273E&quot;,&quot;\\ding{95}&quot;:&quot;\u273F&quot;,&quot;\\ding{96}&quot;:&quot;\u2740&quot;,&quot;\\ding{97}&quot;:&quot;\u2741&quot;,&quot;\\ding{98}&quot;:&quot;\u2742&quot;,&quot;\\ding{99}&quot;:&quot;\u2743&quot;,&quot;\\ding{100}&quot;:&quot;\u2744&quot;,&quot;\\ding{101}&quot;:&quot;\u2745&quot;,&quot;\\ding{102}&quot;:&quot;\u2746&quot;,&quot;\\ding{103}&quot;:&quot;\u2747&quot;,&quot;\\ding{104}&quot;:&quot;\u2748&quot;,&quot;\\ding{105}&quot;:&quot;\u2749&quot;,&quot;\\ding{106}&quot;:&quot;\u274A&quot;,&quot;\\ding{107}&quot;:&quot;\u274B&quot;,&quot;\\ding{109}&quot;:&quot;\u274D&quot;,&quot;\\ding{111}&quot;:&quot;\u274F&quot;,&quot;\\ding{112}&quot;:&quot;\u2750&quot;,&quot;\\ding{113}&quot;:&quot;\u2751&quot;,&quot;\\ding{114}&quot;:&quot;\u2752&quot;,&quot;\\ding{118}&quot;:&quot;\u2756&quot;,&quot;\\ding{120}&quot;:&quot;\u2758&quot;,&quot;\\ding{121}&quot;:&quot;\u2759&quot;,&quot;\\ding{122}&quot;:&quot;\u275A&quot;,&quot;\\ding{123}&quot;:&quot;\u275B&quot;,&quot;\\ding{124}&quot;:&quot;\u275C&quot;,&quot;\\ding{125}&quot;:&quot;\u275D&quot;,&quot;\\ding{126}&quot;:&quot;\u275E&quot;,&quot;\\ding{161}&quot;:&quot;\u2761&quot;,&quot;\\ding{162}&quot;:&quot;\u2762&quot;,&quot;\\ding{163}&quot;:&quot;\u2763&quot;,&quot;\\ding{164}&quot;:&quot;\u2764&quot;,&quot;\\ding{165}&quot;:&quot;\u2765&quot;,&quot;\\ding{166}&quot;:&quot;\u2766&quot;,&quot;\\ding{167}&quot;:&quot;\u2767&quot;,&quot;\\ding{182}&quot;:&quot;\u2776&quot;,&quot;\\ding{183}&quot;:&quot;\u2777&quot;,&quot;\\ding{184}&quot;:&quot;\u2778&quot;,&quot;\\ding{185}&quot;:&quot;\u2779&quot;,&quot;\\ding{186}&quot;:&quot;\u277A&quot;,&quot;\\ding{187}&quot;:&quot;\u277B&quot;,&quot;\\ding{188}&quot;:&quot;\u277C&quot;,&quot;\\ding{189}&quot;:&quot;\u277D&quot;,&quot;\\ding{190}&quot;:&quot;\u277E&quot;,&quot;\\ding{191}&quot;:&quot;\u277F&quot;,&quot;\\ding{192}&quot;:&quot;\u2780&quot;,&quot;\\ding{193}&quot;:&quot;\u2781&quot;,&quot;\\ding{194}&quot;:&quot;\u2782&quot;,&quot;\\ding{195}&quot;:&quot;\u2783&quot;,&quot;\\ding{196}&quot;:&quot;\u2784&quot;,&quot;\\ding{197}&quot;:&quot;\u2785&quot;,&quot;\\ding{198}&quot;:&quot;\u2786&quot;,&quot;\\ding{199}&quot;:&quot;\u2787&quot;,&quot;\\ding{200}&quot;:&quot;\u2788&quot;,&quot;\\ding{201}&quot;:&quot;\u2789&quot;,&quot;\\ding{202}&quot;:&quot;\u278A&quot;,&quot;\\ding{203}&quot;:&quot;\u278B&quot;,&quot;\\ding{204}&quot;:&quot;\u278C&quot;,&quot;\\ding{205}&quot;:&quot;\u278D&quot;,&quot;\\ding{206}&quot;:&quot;\u278E&quot;,&quot;\\ding{207}&quot;:&quot;\u278F&quot;,&quot;\\ding{208}&quot;:&quot;\u2790&quot;,&quot;\\ding{209}&quot;:&quot;\u2791&quot;,&quot;\\ding{210}&quot;:&quot;\u2792&quot;,&quot;\\ding{211}&quot;:&quot;\u2793&quot;,&quot;\\ding{212}&quot;:&quot;\u2794&quot;,&quot;\\ding{216}&quot;:&quot;\u2798&quot;,&quot;\\ding{217}&quot;:&quot;\u2799&quot;,&quot;\\ding{218}&quot;:&quot;\u279A&quot;,&quot;\\ding{219}&quot;:&quot;\u279B&quot;,&quot;\\ding{220}&quot;:&quot;\u279C&quot;,&quot;\\ding{221}&quot;:&quot;\u279D&quot;,&quot;\\ding{222}&quot;:&quot;\u279E&quot;,&quot;\\ding{223}&quot;:&quot;\u279F&quot;,&quot;\\ding{224}&quot;:&quot;\u27A0&quot;,&quot;\\ding{225}&quot;:&quot;\u27A1&quot;,&quot;\\ding{226}&quot;:&quot;\u27A2&quot;,&quot;\\ding{227}&quot;:&quot;\u27A3&quot;,&quot;\\ding{228}&quot;:&quot;\u27A4&quot;,&quot;\\ding{229}&quot;:&quot;\u27A5&quot;,&quot;\\ding{230}&quot;:&quot;\u27A6&quot;,&quot;\\ding{231}&quot;:&quot;\u27A7&quot;,&quot;\\ding{232}&quot;:&quot;\u27A8&quot;,&quot;\\ding{233}&quot;:&quot;\u27A9&quot;,&quot;\\ding{234}&quot;:&quot;\u27AA&quot;,&quot;\\ding{235}&quot;:&quot;\u27AB&quot;,&quot;\\ding{236}&quot;:&quot;\u27AC&quot;,&quot;\\ding{237}&quot;:&quot;\u27AD&quot;,&quot;\\ding{238}&quot;:&quot;\u27AE&quot;,&quot;\\ding{239}&quot;:&quot;\u27AF&quot;,&quot;\\ding{241}&quot;:&quot;\u27B1&quot;,&quot;\\ding{242}&quot;:&quot;\u27B2&quot;,&quot;\\ding{243}&quot;:&quot;\u27B3&quot;,&quot;\\ding{244}&quot;:&quot;\u27B4&quot;,&quot;\\ding{245}&quot;:&quot;\u27B5&quot;,&quot;\\ding{246}&quot;:&quot;\u27B6&quot;,&quot;\\ding{247}&quot;:&quot;\u27B7&quot;,&quot;\\ding{248}&quot;:&quot;\u27B8&quot;,&quot;\\ding{249}&quot;:&quot;\u27B9&quot;,&quot;\\ding{250}&quot;:&quot;\u27BA&quot;,&quot;\\ding{251}&quot;:&quot;\u27BB&quot;,&quot;\\ding{252}&quot;:&quot;\u27BC&quot;,&quot;\\ding{253}&quot;:&quot;\u27BD&quot;,&quot;\\ding{254}&quot;:&quot;\u27BE&quot;,&quot;\\longleftarrow&quot;:&quot;\u27F5&quot;,&quot;\\longrightarrow&quot;:&quot;\u27F6&quot;,&quot;\\longleftrightarrow&quot;:&quot;\u27F7&quot;,&quot;\\Longleftarrow&quot;:&quot;\u27F8&quot;,&quot;\\Longrightarrow&quot;:&quot;\u27F9&quot;,&quot;\\Longleftrightarrow&quot;:&quot;\u27FA&quot;,&quot;\\longmapsto&quot;:&quot;\u27FC&quot;,&quot;\\sim\\joinrel\\leadsto&quot;:&quot;\u27FF&quot;,&quot;\\ElsevierGlyph{E212}&quot;:&quot;\u2905&quot;,&quot;\\UpArrowBar&quot;:&quot;\u2912&quot;,&quot;\\DownArrowBar&quot;:&quot;\u2913&quot;,&quot;\\ElsevierGlyph{E20C}&quot;:&quot;\u2923&quot;,&quot;\\ElsevierGlyph{E20D}&quot;:&quot;\u2924&quot;,&quot;\\ElsevierGlyph{E20B}&quot;:&quot;\u2925&quot;,&quot;\\ElsevierGlyph{E20A}&quot;:&quot;\u2926&quot;,&quot;\\ElsevierGlyph{E211}&quot;:&quot;\u2927&quot;,&quot;\\ElsevierGlyph{E20E}&quot;:&quot;\u2928&quot;,&quot;\\ElsevierGlyph{E20F}&quot;:&quot;\u2929&quot;,&quot;\\ElsevierGlyph{E210}&quot;:&quot;\u292A&quot;,&quot;\\ElsevierGlyph{E21C}&quot;:&quot;\u2933&quot;,&quot;\u2933-00338&quot;:&quot;\\ElsevierGlyph{E21D}&quot;,&quot;\\ElsevierGlyph{E21A}&quot;:&quot;\u2936&quot;,&quot;\\ElsevierGlyph{E219}&quot;:&quot;\u2937&quot;,&quot;\\Elolarr&quot;:&quot;\u2940&quot;,&quot;\\Elorarr&quot;:&quot;\u2941&quot;,&quot;\\ElzRlarr&quot;:&quot;\u2942&quot;,&quot;\\ElzrLarr&quot;:&quot;\u2944&quot;,&quot;\\Elzrarrx&quot;:&quot;\u2947&quot;,&quot;\\LeftRightVector&quot;:&quot;\u294E&quot;,&quot;\\RightUpDownVector&quot;:&quot;\u294F&quot;,&quot;\\DownLeftRightVector&quot;:&quot;\u2950&quot;,&quot;\\LeftUpDownVector&quot;:&quot;\u2951&quot;,&quot;\\LeftVectorBar&quot;:&quot;\u2952&quot;,&quot;\\RightVectorBar&quot;:&quot;\u2953&quot;,&quot;\\RightUpVectorBar&quot;:&quot;\u2954&quot;,&quot;\\RightDownVectorBar&quot;:&quot;\u2955&quot;,&quot;\\DownLeftVectorBar&quot;:&quot;\u2956&quot;,&quot;\\DownRightVectorBar&quot;:&quot;\u2957&quot;,&quot;\\LeftUpVectorBar&quot;:&quot;\u2958&quot;,&quot;\\LeftDownVectorBar&quot;:&quot;\u2959&quot;,&quot;\\LeftTeeVector&quot;:&quot;\u295A&quot;,&quot;\\RightTeeVector&quot;:&quot;\u295B&quot;,&quot;\\RightUpTeeVector&quot;:&quot;\u295C&quot;,&quot;\\RightDownTeeVector&quot;:&quot;\u295D&quot;,&quot;\\DownLeftTeeVector&quot;:&quot;\u295E&quot;,&quot;\\DownRightTeeVector&quot;:&quot;\u295F&quot;,&quot;\\LeftUpTeeVector&quot;:&quot;\u2960&quot;,&quot;\\LeftDownTeeVector&quot;:&quot;\u2961&quot;,&quot;\\UpEquilibrium&quot;:&quot;\u296E&quot;,&quot;\\ReverseUpEquilibrium&quot;:&quot;\u296F&quot;,&quot;\\RoundImplies&quot;:&quot;\u2970&quot;,&quot;\\ElsevierGlyph{E214}&quot;:&quot;\u297C&quot;,&quot;\\ElsevierGlyph{E215}&quot;:&quot;\u297D&quot;,&quot;\\Elztfnc&quot;:&quot;\u2980&quot;,&quot;\\ElsevierGlyph{3018}&quot;:&quot;\u2985&quot;,&quot;\\Elroang&quot;:&quot;\u2986&quot;,&quot;\u2993&quot;:&quot;&amp;lt;\\kern-0.58em(&quot;,&quot;\\ElsevierGlyph{E291}&quot;:&quot;\u2994&quot;,&quot;\\Elzddfnc&quot;:&quot;\u2999&quot;,&quot;\\Angle&quot;:&quot;\u299C&quot;,&quot;\\Elzlpargt&quot;:&quot;\u29A0&quot;,&quot;\\ElsevierGlyph{E260}&quot;:&quot;\u29B5&quot;,&quot;\\ElsevierGlyph{E61B}&quot;:&quot;\u29B6&quot;,&quot;\\ElzLap&quot;:&quot;\u29CA&quot;,&quot;\\Elzdefas&quot;:&quot;\u29CB&quot;,&quot;\\LeftTriangleBar&quot;:&quot;\u29CF&quot;,&quot;\u29CF-00338&quot;:&quot;\\NotLeftTriangleBar&quot;,&quot;\\RightTriangleBar&quot;:&quot;\u29D0&quot;,&quot;\u29D0-00338&quot;:&quot;\\NotRightTriangleBar&quot;,&quot;\\ElsevierGlyph{E372}&quot;:&quot;\u29DC&quot;,&quot;\\blacklozenge&quot;:&quot;\u29EB&quot;,&quot;\\RuleDelayed&quot;:&quot;\u29F4&quot;,&quot;\\Elxuplus&quot;:&quot;\u2A04&quot;,&quot;\\ElzThr&quot;:&quot;\u2A05&quot;,&quot;\\Elxsqcup&quot;:&quot;\u2A06&quot;,&quot;\\ElzInf&quot;:&quot;\u2A07&quot;,&quot;\\ElzSup&quot;:&quot;\u2A08&quot;,&quot;\\ElzCint&quot;:&quot;\u2A0D&quot;,&quot;\\clockoint&quot;:&quot;\u2A0F&quot;,&quot;\\ElsevierGlyph{E395}&quot;:&quot;\u2A10&quot;,&quot;\\sqrint&quot;:&quot;\u2A16&quot;,&quot;\\ElsevierGlyph{E25A}&quot;:&quot;\u2A25&quot;,&quot;\\ElsevierGlyph{E25B}&quot;:&quot;\u2A2A&quot;,&quot;\\ElsevierGlyph{E25C}&quot;:&quot;\u2A2D&quot;,&quot;\\ElsevierGlyph{E25D}&quot;:&quot;\u2A2E&quot;,&quot;\\ElzTimes&quot;:&quot;\u2A2F&quot;,&quot;\\ElsevierGlyph{E25E}&quot;:&quot;\u2A34&quot;,&quot;\\ElsevierGlyph{E25E}&quot;:&quot;\u2A35&quot;,&quot;\\ElsevierGlyph{E259}&quot;:&quot;\u2A3C&quot;,&quot;\\amalg&quot;:&quot;\u2A3F&quot;,&quot;\\ElzAnd&quot;:&quot;\u2A53&quot;,&quot;\\ElzOr&quot;:&quot;\u2A54&quot;,&quot;\\ElsevierGlyph{E36E}&quot;:&quot;\u2A55&quot;,&quot;\\ElOr&quot;:&quot;\u2A56&quot;,&quot;\\perspcorrespond&quot;:&quot;\u2A5E&quot;,&quot;\\Elzminhat&quot;:&quot;\u2A5F&quot;,&quot;\\ElsevierGlyph{225A}&quot;:&quot;\u2A63&quot;,&quot;\u2A6E&quot;:&quot;\\stackrel{*}{=}&quot;,&quot;\\Equal&quot;:&quot;\u2A75&quot;,&quot;\\leqslant&quot;:&quot;\u2A7D&quot;,&quot;\u2A7D-00338&quot;:&quot;\\nleqslant&quot;,&quot;\\geqslant&quot;:&quot;\u2A7E&quot;,&quot;\u2A7E-00338&quot;:&quot;\\ngeqslant&quot;,&quot;\\lessapprox&quot;:&quot;\u2A85&quot;,&quot;\\gtrapprox&quot;:&quot;\u2A86&quot;,&quot;\\lneq&quot;:&quot;\u2A87&quot;,&quot;\\gneq&quot;:&quot;\u2A88&quot;,&quot;\\lnapprox&quot;:&quot;\u2A89&quot;,&quot;\\gnapprox&quot;:&quot;\u2A8A&quot;,&quot;\\lesseqqgtr&quot;:&quot;\u2A8B&quot;,&quot;\\gtreqqless&quot;:&quot;\u2A8C&quot;,&quot;\\eqslantless&quot;:&quot;\u2A95&quot;,&quot;\\eqslantgtr&quot;:&quot;\u2A96&quot;,&quot;\\Pisymbol{ppi020}{117}&quot;:&quot;\u2A9D&quot;,&quot;\\Pisymbol{ppi020}{105}&quot;:&quot;\u2A9E&quot;,&quot;\\NestedLessLess&quot;:&quot;\u2AA1&quot;,&quot;\u2AA1-00338&quot;:&quot;\\NotNestedLessLess&quot;,&quot;\\NestedGreaterGreater&quot;:&quot;\u2AA2&quot;,&quot;\u2AA2-00338&quot;:&quot;\\NotNestedGreaterGreater&quot;,&quot;\\preceq&quot;:&quot;\u2AAF&quot;,&quot;\u2AAF-00338&quot;:&quot;\\not\\preceq&quot;,&quot;\\succeq&quot;:&quot;\u2AB0&quot;,&quot;\u2AB0-00338&quot;:&quot;\\not\\succeq&quot;,&quot;\\precneqq&quot;:&quot;\u2AB5&quot;,&quot;\\succneqq&quot;:&quot;\u2AB6&quot;,&quot;\\precapprox&quot;:&quot;\u2AB7&quot;,&quot;\\succapprox&quot;:&quot;\u2AB8&quot;,&quot;\\precnapprox&quot;:&quot;\u2AB9&quot;,&quot;\\succnapprox&quot;:&quot;\u2ABA&quot;,&quot;\\subseteqq&quot;:&quot;\u2AC5&quot;,&quot;\u2AC5-00338&quot;:&quot;\\nsubseteqq&quot;,&quot;\\supseteqq&quot;:&quot;\u2AC6&quot;,&quot;\u2AC6-00338&quot;:&quot;\\nsupseteqq&quot;,&quot;\\subsetneqq&quot;:&quot;\u2ACB&quot;,&quot;\\supsetneqq&quot;:&quot;\u2ACC&quot;,&quot;\\ElsevierGlyph{E30D}&quot;:&quot;\u2AEB&quot;,&quot;\\Elztdcol&quot;:&quot;\u2AF6&quot;,&quot;\u2AFD&quot;:&quot;{{/}\\!\\!{/}}&quot;,&quot;\u2AFD-020E5&quot;:&quot;{\\rlap{\\textbackslash}{{/}\\!\\!{/}}}&quot;,&quot;\\ElsevierGlyph{300A}&quot;:&quot;\u300A&quot;,&quot;\\ElsevierGlyph{300B}&quot;:&quot;\u300B&quot;,&quot;\\ElsevierGlyph{3018}&quot;:&quot;\u3018&quot;,&quot;\\ElsevierGlyph{3019}&quot;:&quot;\u3019&quot;,&quot;\\openbracketleft&quot;:&quot;\u301A&quot;,&quot;\\openbracketright&quot;:&quot;\u301B&quot;,&quot;\\mathbf{A}&quot;:&quot;\uD400&quot;,&quot;\\mathbf{B}&quot;:&quot;\uD401&quot;,&quot;\\mathbf{C}&quot;:&quot;\uD402&quot;,&quot;\\mathbf{D}&quot;:&quot;\uD403&quot;,&quot;\\mathbf{E}&quot;:&quot;\uD404&quot;,&quot;\\mathbf{F}&quot;:&quot;\uD405&quot;,&quot;\\mathbf{G}&quot;:&quot;\uD406&quot;,&quot;\\mathbf{H}&quot;:&quot;\uD407&quot;,&quot;\\mathbf{I}&quot;:&quot;\uD408&quot;,&quot;\\mathbf{J}&quot;:&quot;\uD409&quot;,&quot;\\mathbf{K}&quot;:&quot;\uD40A&quot;,&quot;\\mathbf{L}&quot;:&quot;\uD40B&quot;,&quot;\\mathbf{M}&quot;:&quot;\uD40C&quot;,&quot;\\mathbf{N}&quot;:&quot;\uD40D&quot;,&quot;\\mathbf{O}&quot;:&quot;\uD40E&quot;,&quot;\\mathbf{P}&quot;:&quot;\uD40F&quot;,&quot;\\mathbf{Q}&quot;:&quot;\uD410&quot;,&quot;\\mathbf{R}&quot;:&quot;\uD411&quot;,&quot;\\mathbf{S}&quot;:&quot;\uD412&quot;,&quot;\\mathbf{T}&quot;:&quot;\uD413&quot;,&quot;\\mathbf{U}&quot;:&quot;\uD414&quot;,&quot;\\mathbf{V}&quot;:&quot;\uD415&quot;,&quot;\\mathbf{W}&quot;:&quot;\uD416&quot;,&quot;\\mathbf{X}&quot;:&quot;\uD417&quot;,&quot;\\mathbf{Y}&quot;:&quot;\uD418&quot;,&quot;\\mathbf{Z}&quot;:&quot;\uD419&quot;,&quot;\\mathbf{a}&quot;:&quot;\uD41A&quot;,&quot;\\mathbf{b}&quot;:&quot;\uD41B&quot;,&quot;\\mathbf{c}&quot;:&quot;\uD41C&quot;,&quot;\\mathbf{d}&quot;:&quot;\uD41D&quot;,&quot;\\mathbf{e}&quot;:&quot;\uD41E&quot;,&quot;\\mathbf{f}&quot;:&quot;\uD41F&quot;,&quot;\\mathbf{g}&quot;:&quot;\uD420&quot;,&quot;\\mathbf{h}&quot;:&quot;\uD421&quot;,&quot;\\mathbf{i}&quot;:&quot;\uD422&quot;,&quot;\\mathbf{j}&quot;:&quot;\uD423&quot;,&quot;\\mathbf{k}&quot;:&quot;\uD424&quot;,&quot;\\mathbf{l}&quot;:&quot;\uD425&quot;,&quot;\\mathbf{m}&quot;:&quot;\uD426&quot;,&quot;\\mathbf{n}&quot;:&quot;\uD427&quot;,&quot;\\mathbf{o}&quot;:&quot;\uD428&quot;,&quot;\\mathbf{p}&quot;:&quot;\uD429&quot;,&quot;\\mathbf{q}&quot;:&quot;\uD42A&quot;,&quot;\\mathbf{r}&quot;:&quot;\uD42B&quot;,&quot;\\mathbf{s}&quot;:&quot;\uD42C&quot;,&quot;\\mathbf{t}&quot;:&quot;\uD42D&quot;,&quot;\\mathbf{u}&quot;:&quot;\uD42E&quot;,&quot;\\mathbf{v}&quot;:&quot;\uD42F&quot;,&quot;\\mathbf{w}&quot;:&quot;\uD430&quot;,&quot;\\mathbf{x}&quot;:&quot;\uD431&quot;,&quot;\\mathbf{y}&quot;:&quot;\uD432&quot;,&quot;\\mathbf{z}&quot;:&quot;\uD433&quot;,&quot;\\mathsl{A}&quot;:&quot;\uD434&quot;,&quot;\\mathsl{B}&quot;:&quot;\uD435&quot;,&quot;\\mathsl{C}&quot;:&quot;\uD436&quot;,&quot;\\mathsl{D}&quot;:&quot;\uD437&quot;,&quot;\\mathsl{E}&quot;:&quot;\uD438&quot;,&quot;\\mathsl{F}&quot;:&quot;\uD439&quot;,&quot;\\mathsl{G}&quot;:&quot;\uD43A&quot;,&quot;\\mathsl{H}&quot;:&quot;\uD43B&quot;,&quot;\\mathsl{I}&quot;:&quot;\uD43C&quot;,&quot;\\mathsl{J}&quot;:&quot;\uD43D&quot;,&quot;\\mathsl{K}&quot;:&quot;\uD43E&quot;,&quot;\\mathsl{L}&quot;:&quot;\uD43F&quot;,&quot;\\mathsl{M}&quot;:&quot;\uD440&quot;,&quot;\\mathsl{N}&quot;:&quot;\uD441&quot;,&quot;\\mathsl{O}&quot;:&quot;\uD442&quot;,&quot;\\mathsl{P}&quot;:&quot;\uD443&quot;,&quot;\\mathsl{Q}&quot;:&quot;\uD444&quot;,&quot;\\mathsl{R}&quot;:&quot;\uD445&quot;,&quot;\\mathsl{S}&quot;:&quot;\uD446&quot;,&quot;\\mathsl{T}&quot;:&quot;\uD447&quot;,&quot;\\mathsl{U}&quot;:&quot;\uD448&quot;,&quot;\\mathsl{V}&quot;:&quot;\uD449&quot;,&quot;\\mathsl{W}&quot;:&quot;\uD44A&quot;,&quot;\\mathsl{X}&quot;:&quot;\uD44B&quot;,&quot;\\mathsl{Y}&quot;:&quot;\uD44C&quot;,&quot;\\mathsl{Z}&quot;:&quot;\uD44D&quot;,&quot;\\mathsl{a}&quot;:&quot;\uD44E&quot;,&quot;\\mathsl{b}&quot;:&quot;\uD44F&quot;,&quot;\\mathsl{c}&quot;:&quot;\uD450&quot;,&quot;\\mathsl{d}&quot;:&quot;\uD451&quot;,&quot;\\mathsl{e}&quot;:&quot;\uD452&quot;,&quot;\\mathsl{f}&quot;:&quot;\uD453&quot;,&quot;\\mathsl{g}&quot;:&quot;\uD454&quot;,&quot;\\mathsl{i}&quot;:&quot;\uD456&quot;,&quot;\\mathsl{j}&quot;:&quot;\uD457&quot;,&quot;\\mathsl{k}&quot;:&quot;\uD458&quot;,&quot;\\mathsl{l}&quot;:&quot;\uD459&quot;,&quot;\\mathsl{m}&quot;:&quot;\uD45A&quot;,&quot;\\mathsl{n}&quot;:&quot;\uD45B&quot;,&quot;\\mathsl{o}&quot;:&quot;\uD45C&quot;,&quot;\\mathsl{p}&quot;:&quot;\uD45D&quot;,&quot;\\mathsl{q}&quot;:&quot;\uD45E&quot;,&quot;\\mathsl{r}&quot;:&quot;\uD45F&quot;,&quot;\\mathsl{s}&quot;:&quot;\uD460&quot;,&quot;\\mathsl{t}&quot;:&quot;\uD461&quot;,&quot;\\mathsl{u}&quot;:&quot;\uD462&quot;,&quot;\\mathsl{v}&quot;:&quot;\uD463&quot;,&quot;\\mathsl{w}&quot;:&quot;\uD464&quot;,&quot;\\mathsl{x}&quot;:&quot;\uD465&quot;,&quot;\\mathsl{y}&quot;:&quot;\uD466&quot;,&quot;\\mathsl{z}&quot;:&quot;\uD467&quot;,&quot;\\mathbit{A}&quot;:&quot;\uD468&quot;,&quot;\\mathbit{B}&quot;:&quot;\uD469&quot;,&quot;\\mathbit{C}&quot;:&quot;\uD46A&quot;,&quot;\\mathbit{D}&quot;:&quot;\uD46B&quot;,&quot;\\mathbit{E}&quot;:&quot;\uD46C&quot;,&quot;\\mathbit{F}&quot;:&quot;\uD46D&quot;,&quot;\\mathbit{G}&quot;:&quot;\uD46E&quot;,&quot;\\mathbit{H}&quot;:&quot;\uD46F&quot;,&quot;\\mathbit{I}&quot;:&quot;\uD470&quot;,&quot;\\mathbit{J}&quot;:&quot;\uD471&quot;,&quot;\\mathbit{K}&quot;:&quot;\uD472&quot;,&quot;\\mathbit{L}&quot;:&quot;\uD473&quot;,&quot;\\mathbit{M}&quot;:&quot;\uD474&quot;,&quot;\\mathbit{N}&quot;:&quot;\uD475&quot;,&quot;\\mathbit{O}&quot;:&quot;\uD476&quot;,&quot;\\mathbit{P}&quot;:&quot;\uD477&quot;,&quot;\\mathbit{Q}&quot;:&quot;\uD478&quot;,&quot;\\mathbit{R}&quot;:&quot;\uD479&quot;,&quot;\\mathbit{S}&quot;:&quot;\uD47A&quot;,&quot;\\mathbit{T}&quot;:&quot;\uD47B&quot;,&quot;\\mathbit{U}&quot;:&quot;\uD47C&quot;,&quot;\\mathbit{V}&quot;:&quot;\uD47D&quot;,&quot;\\mathbit{W}&quot;:&quot;\uD47E&quot;,&quot;\\mathbit{X}&quot;:&quot;\uD47F&quot;,&quot;\\mathbit{Y}&quot;:&quot;\uD480&quot;,&quot;\\mathbit{Z}&quot;:&quot;\uD481&quot;,&quot;\\mathbit{a}&quot;:&quot;\uD482&quot;,&quot;\\mathbit{b}&quot;:&quot;\uD483&quot;,&quot;\\mathbit{c}&quot;:&quot;\uD484&quot;,&quot;\\mathbit{d}&quot;:&quot;\uD485&quot;,&quot;\\mathbit{e}&quot;:&quot;\uD486&quot;,&quot;\\mathbit{f}&quot;:&quot;\uD487&quot;,&quot;\\mathbit{g}&quot;:&quot;\uD488&quot;,&quot;\\mathbit{h}&quot;:&quot;\uD489&quot;,&quot;\\mathbit{i}&quot;:&quot;\uD48A&quot;,&quot;\\mathbit{j}&quot;:&quot;\uD48B&quot;,&quot;\\mathbit{k}&quot;:&quot;\uD48C&quot;,&quot;\\mathbit{l}&quot;:&quot;\uD48D&quot;,&quot;\\mathbit{m}&quot;:&quot;\uD48E&quot;,&quot;\\mathbit{n}&quot;:&quot;\uD48F&quot;,&quot;\\mathbit{o}&quot;:&quot;\uD490&quot;,&quot;\\mathbit{p}&quot;:&quot;\uD491&quot;,&quot;\\mathbit{q}&quot;:&quot;\uD492&quot;,&quot;\\mathbit{r}&quot;:&quot;\uD493&quot;,&quot;\\mathbit{s}&quot;:&quot;\uD494&quot;,&quot;\\mathbit{t}&quot;:&quot;\uD495&quot;,&quot;\\mathbit{u}&quot;:&quot;\uD496&quot;,&quot;\\mathbit{v}&quot;:&quot;\uD497&quot;,&quot;\\mathbit{w}&quot;:&quot;\uD498&quot;,&quot;\\mathbit{x}&quot;:&quot;\uD499&quot;,&quot;\\mathbit{y}&quot;:&quot;\uD49A&quot;,&quot;\\mathbit{z}&quot;:&quot;\uD49B&quot;,&quot;\\mathscr{A}&quot;:&quot;\uD49C&quot;,&quot;\\mathscr{C}&quot;:&quot;\uD49E&quot;,&quot;\\mathscr{D}&quot;:&quot;\uD49F&quot;,&quot;\\mathscr{G}&quot;:&quot;\uD4A2&quot;,&quot;\\mathscr{J}&quot;:&quot;\uD4A5&quot;,&quot;\\mathscr{K}&quot;:&quot;\uD4A6&quot;,&quot;\\mathscr{N}&quot;:&quot;\uD4A9&quot;,&quot;\\mathscr{O}&quot;:&quot;\uD4AA&quot;,&quot;\\mathscr{P}&quot;:&quot;\uD4AB&quot;,&quot;\\mathscr{Q}&quot;:&quot;\uD4AC&quot;,&quot;\\mathscr{S}&quot;:&quot;\uD4AE&quot;,&quot;\\mathscr{T}&quot;:&quot;\uD4AF&quot;,&quot;\\mathscr{U}&quot;:&quot;\uD4B0&quot;,&quot;\\mathscr{V}&quot;:&quot;\uD4B1&quot;,&quot;\\mathscr{W}&quot;:&quot;\uD4B2&quot;,&quot;\\mathscr{X}&quot;:&quot;\uD4B3&quot;,&quot;\\mathscr{Y}&quot;:&quot;\uD4B4&quot;,&quot;\\mathscr{Z}&quot;:&quot;\uD4B5&quot;,&quot;\\mathscr{a}&quot;:&quot;\uD4B6&quot;,&quot;\\mathscr{b}&quot;:&quot;\uD4B7&quot;,&quot;\\mathscr{c}&quot;:&quot;\uD4B8&quot;,&quot;\\mathscr{d}&quot;:&quot;\uD4B9&quot;,&quot;\\mathscr{f}&quot;:&quot;\uD4BB&quot;,&quot;\\mathscr{h}&quot;:&quot;\uD4BD&quot;,&quot;\\mathscr{i}&quot;:&quot;\uD4BE&quot;,&quot;\\mathscr{j}&quot;:&quot;\uD4BF&quot;,&quot;\\mathscr{k}&quot;:&quot;\uD4C0&quot;,&quot;\\mathscr{l}&quot;:&quot;\uD4C1&quot;,&quot;\\mathscr{m}&quot;:&quot;\uD4C2&quot;,&quot;\\mathscr{n}&quot;:&quot;\uD4C3&quot;,&quot;\\mathscr{p}&quot;:&quot;\uD4C5&quot;,&quot;\\mathscr{q}&quot;:&quot;\uD4C6&quot;,&quot;\\mathscr{r}&quot;:&quot;\uD4C7&quot;,&quot;\\mathscr{s}&quot;:&quot;\uD4C8&quot;,&quot;\\mathscr{t}&quot;:&quot;\uD4C9&quot;,&quot;\\mathscr{u}&quot;:&quot;\uD4CA&quot;,&quot;\\mathscr{v}&quot;:&quot;\uD4CB&quot;,&quot;\\mathscr{w}&quot;:&quot;\uD4CC&quot;,&quot;\\mathscr{x}&quot;:&quot;\uD4CD&quot;,&quot;\\mathscr{y}&quot;:&quot;\uD4CE&quot;,&quot;\\mathscr{z}&quot;:&quot;\uD4CF&quot;,&quot;\\mathmit{A}&quot;:&quot;\uD4D0&quot;,&quot;\\mathmit{B}&quot;:&quot;\uD4D1&quot;,&quot;\\mathmit{C}&quot;:&quot;\uD4D2&quot;,&quot;\\mathmit{D}&quot;:&quot;\uD4D3&quot;,&quot;\\mathmit{E}&quot;:&quot;\uD4D4&quot;,&quot;\\mathmit{F}&quot;:&quot;\uD4D5&quot;,&quot;\\mathmit{G}&quot;:&quot;\uD4D6&quot;,&quot;\\mathmit{H}&quot;:&quot;\uD4D7&quot;,&quot;\\mathmit{I}&quot;:&quot;\uD4D8&quot;,&quot;\\mathmit{J}&quot;:&quot;\uD4D9&quot;,&quot;\\mathmit{K}&quot;:&quot;\uD4DA&quot;,&quot;\\mathmit{L}&quot;:&quot;\uD4DB&quot;,&quot;\\mathmit{M}&quot;:&quot;\uD4DC&quot;,&quot;\\mathmit{N}&quot;:&quot;\uD4DD&quot;,&quot;\\mathmit{O}&quot;:&quot;\uD4DE&quot;,&quot;\\mathmit{P}&quot;:&quot;\uD4DF&quot;,&quot;\\mathmit{Q}&quot;:&quot;\uD4E0&quot;,&quot;\\mathmit{R}&quot;:&quot;\uD4E1&quot;,&quot;\\mathmit{S}&quot;:&quot;\uD4E2&quot;,&quot;\\mathmit{T}&quot;:&quot;\uD4E3&quot;,&quot;\\mathmit{U}&quot;:&quot;\uD4E4&quot;,&quot;\\mathmit{V}&quot;:&quot;\uD4E5&quot;,&quot;\\mathmit{W}&quot;:&quot;\uD4E6&quot;,&quot;\\mathmit{X}&quot;:&quot;\uD4E7&quot;,&quot;\\mathmit{Y}&quot;:&quot;\uD4E8&quot;,&quot;\\mathmit{Z}&quot;:&quot;\uD4E9&quot;,&quot;\\mathmit{a}&quot;:&quot;\uD4EA&quot;,&quot;\\mathmit{b}&quot;:&quot;\uD4EB&quot;,&quot;\\mathmit{c}&quot;:&quot;\uD4EC&quot;,&quot;\\mathmit{d}&quot;:&quot;\uD4ED&quot;,&quot;\\mathmit{e}&quot;:&quot;\uD4EE&quot;,&quot;\\mathmit{f}&quot;:&quot;\uD4EF&quot;,&quot;\\mathmit{g}&quot;:&quot;\uD4F0&quot;,&quot;\\mathmit{h}&quot;:&quot;\uD4F1&quot;,&quot;\\mathmit{i}&quot;:&quot;\uD4F2&quot;,&quot;\\mathmit{j}&quot;:&quot;\uD4F3&quot;,&quot;\\mathmit{k}&quot;:&quot;\uD4F4&quot;,&quot;\\mathmit{l}&quot;:&quot;\uD4F5&quot;,&quot;\\mathmit{m}&quot;:&quot;\uD4F6&quot;,&quot;\\mathmit{n}&quot;:&quot;\uD4F7&quot;,&quot;\\mathmit{o}&quot;:&quot;\uD4F8&quot;,&quot;\\mathmit{p}&quot;:&quot;\uD4F9&quot;,&quot;\\mathmit{q}&quot;:&quot;\uD4FA&quot;,&quot;\\mathmit{r}&quot;:&quot;\uD4FB&quot;,&quot;\\mathmit{s}&quot;:&quot;\uD4FC&quot;,&quot;\\mathmit{t}&quot;:&quot;\uD4FD&quot;,&quot;\\mathmit{u}&quot;:&quot;\uD4FE&quot;,&quot;\\mathmit{v}&quot;:&quot;\uD4FF&quot;,&quot;\\mathmit{w}&quot;:&quot;\uD500&quot;,&quot;\\mathmit{x}&quot;:&quot;\uD501&quot;,&quot;\\mathmit{y}&quot;:&quot;\uD502&quot;,&quot;\\mathmit{z}&quot;:&quot;\uD503&quot;,&quot;\\mathfrak{A}&quot;:&quot;\uD504&quot;,&quot;\\mathfrak{B}&quot;:&quot;\uD505&quot;,&quot;\\mathfrak{D}&quot;:&quot;\uD507&quot;,&quot;\\mathfrak{E}&quot;:&quot;\uD508&quot;,&quot;\\mathfrak{F}&quot;:&quot;\uD509&quot;,&quot;\\mathfrak{G}&quot;:&quot;\uD50A&quot;,&quot;\\mathfrak{J}&quot;:&quot;\uD50D&quot;,&quot;\\mathfrak{K}&quot;:&quot;\uD50E&quot;,&quot;\\mathfrak{L}&quot;:&quot;\uD50F&quot;,&quot;\\mathfrak{M}&quot;:&quot;\uD510&quot;,&quot;\\mathfrak{N}&quot;:&quot;\uD511&quot;,&quot;\\mathfrak{O}&quot;:&quot;\uD512&quot;,&quot;\\mathfrak{P}&quot;:&quot;\uD513&quot;,&quot;\\mathfrak{Q}&quot;:&quot;\uD514&quot;,&quot;\\mathfrak{S}&quot;:&quot;\uD516&quot;,&quot;\\mathfrak{T}&quot;:&quot;\uD517&quot;,&quot;\\mathfrak{U}&quot;:&quot;\uD518&quot;,&quot;\\mathfrak{V}&quot;:&quot;\uD519&quot;,&quot;\\mathfrak{W}&quot;:&quot;\uD51A&quot;,&quot;\\mathfrak{X}&quot;:&quot;\uD51B&quot;,&quot;\\mathfrak{Y}&quot;:&quot;\uD51C&quot;,&quot;\\mathfrak{a}&quot;:&quot;\uD51E&quot;,&quot;\\mathfrak{b}&quot;:&quot;\uD51F&quot;,&quot;\\mathfrak{c}&quot;:&quot;\uD520&quot;,&quot;\\mathfrak{d}&quot;:&quot;\uD521&quot;,&quot;\\mathfrak{e}&quot;:&quot;\uD522&quot;,&quot;\\mathfrak{f}&quot;:&quot;\uD523&quot;,&quot;\\mathfrak{g}&quot;:&quot;\uD524&quot;,&quot;\\mathfrak{h}&quot;:&quot;\uD525&quot;,&quot;\\mathfrak{i}&quot;:&quot;\uD526&quot;,&quot;\\mathfrak{j}&quot;:&quot;\uD527&quot;,&quot;\\mathfrak{k}&quot;:&quot;\uD528&quot;,&quot;\\mathfrak{l}&quot;:&quot;\uD529&quot;,&quot;\\mathfrak{m}&quot;:&quot;\uD52A&quot;,&quot;\\mathfrak{n}&quot;:&quot;\uD52B&quot;,&quot;\\mathfrak{o}&quot;:&quot;\uD52C&quot;,&quot;\\mathfrak{p}&quot;:&quot;\uD52D&quot;,&quot;\\mathfrak{q}&quot;:&quot;\uD52E&quot;,&quot;\\mathfrak{r}&quot;:&quot;\uD52F&quot;,&quot;\\mathfrak{s}&quot;:&quot;\uD530&quot;,&quot;\\mathfrak{t}&quot;:&quot;\uD531&quot;,&quot;\\mathfrak{u}&quot;:&quot;\uD532&quot;,&quot;\\mathfrak{v}&quot;:&quot;\uD533&quot;,&quot;\\mathfrak{w}&quot;:&quot;\uD534&quot;,&quot;\\mathfrak{x}&quot;:&quot;\uD535&quot;,&quot;\\mathfrak{y}&quot;:&quot;\uD536&quot;,&quot;\\mathfrak{z}&quot;:&quot;\uD537&quot;,&quot;\\mathbb{A}&quot;:&quot;\uD538&quot;,&quot;\\mathbb{B}&quot;:&quot;\uD539&quot;,&quot;\\mathbb{D}&quot;:&quot;\uD53B&quot;,&quot;\\mathbb{E}&quot;:&quot;\uD53C&quot;,&quot;\\mathbb{F}&quot;:&quot;\uD53D&quot;,&quot;\\mathbb{G}&quot;:&quot;\uD53E&quot;,&quot;\\mathbb{I}&quot;:&quot;\uD540&quot;,&quot;\\mathbb{J}&quot;:&quot;\uD541&quot;,&quot;\\mathbb{K}&quot;:&quot;\uD542&quot;,&quot;\\mathbb{L}&quot;:&quot;\uD543&quot;,&quot;\\mathbb{M}&quot;:&quot;\uD544&quot;,&quot;\\mathbb{O}&quot;:&quot;\uD546&quot;,&quot;\\mathbb{S}&quot;:&quot;\uD54A&quot;,&quot;\\mathbb{T}&quot;:&quot;\uD54B&quot;,&quot;\\mathbb{U}&quot;:&quot;\uD54C&quot;,&quot;\\mathbb{V}&quot;:&quot;\uD54D&quot;,&quot;\\mathbb{W}&quot;:&quot;\uD54E&quot;,&quot;\\mathbb{X}&quot;:&quot;\uD54F&quot;,&quot;\\mathbb{Y}&quot;:&quot;\uD550&quot;,&quot;\\mathbb{a}&quot;:&quot;\uD552&quot;,&quot;\\mathbb{b}&quot;:&quot;\uD553&quot;,&quot;\\mathbb{c}&quot;:&quot;\uD554&quot;,&quot;\\mathbb{d}&quot;:&quot;\uD555&quot;,&quot;\\mathbb{e}&quot;:&quot;\uD556&quot;,&quot;\\mathbb{f}&quot;:&quot;\uD557&quot;,&quot;\\mathbb{g}&quot;:&quot;\uD558&quot;,&quot;\\mathbb{h}&quot;:&quot;\uD559&quot;,&quot;\\mathbb{i}&quot;:&quot;\uD55A&quot;,&quot;\\mathbb{j}&quot;:&quot;\uD55B&quot;,&quot;\\mathbb{k}&quot;:&quot;\uD55C&quot;,&quot;\\mathbb{l}&quot;:&quot;\uD55D&quot;,&quot;\\mathbb{m}&quot;:&quot;\uD55E&quot;,&quot;\\mathbb{n}&quot;:&quot;\uD55F&quot;,&quot;\\mathbb{o}&quot;:&quot;\uD560&quot;,&quot;\\mathbb{p}&quot;:&quot;\uD561&quot;,&quot;\\mathbb{q}&quot;:&quot;\uD562&quot;,&quot;\\mathbb{r}&quot;:&quot;\uD563&quot;,&quot;\\mathbb{s}&quot;:&quot;\uD564&quot;,&quot;\\mathbb{t}&quot;:&quot;\uD565&quot;,&quot;\\mathbb{u}&quot;:&quot;\uD566&quot;,&quot;\\mathbb{v}&quot;:&quot;\uD567&quot;,&quot;\\mathbb{w}&quot;:&quot;\uD568&quot;,&quot;\\mathbb{x}&quot;:&quot;\uD569&quot;,&quot;\\mathbb{y}&quot;:&quot;\uD56A&quot;,&quot;\\mathbb{z}&quot;:&quot;\uD56B&quot;,&quot;\\mathslbb{A}&quot;:&quot;\uD56C&quot;,&quot;\\mathslbb{B}&quot;:&quot;\uD56D&quot;,&quot;\\mathslbb{C}&quot;:&quot;\uD56E&quot;,&quot;\\mathslbb{D}&quot;:&quot;\uD56F&quot;,&quot;\\mathslbb{E}&quot;:&quot;\uD570&quot;,&quot;\\mathslbb{F}&quot;:&quot;\uD571&quot;,&quot;\\mathslbb{G}&quot;:&quot;\uD572&quot;,&quot;\\mathslbb{H}&quot;:&quot;\uD573&quot;,&quot;\\mathslbb{I}&quot;:&quot;\uD574&quot;,&quot;\\mathslbb{J}&quot;:&quot;\uD575&quot;,&quot;\\mathslbb{K}&quot;:&quot;\uD576&quot;,&quot;\\mathslbb{L}&quot;:&quot;\uD577&quot;,&quot;\\mathslbb{M}&quot;:&quot;\uD578&quot;,&quot;\\mathslbb{N}&quot;:&quot;\uD579&quot;,&quot;\\mathslbb{O}&quot;:&quot;\uD57A&quot;,&quot;\\mathslbb{P}&quot;:&quot;\uD57B&quot;,&quot;\\mathslbb{Q}&quot;:&quot;\uD57C&quot;,&quot;\\mathslbb{R}&quot;:&quot;\uD57D&quot;,&quot;\\mathslbb{S}&quot;:&quot;\uD57E&quot;,&quot;\\mathslbb{T}&quot;:&quot;\uD57F&quot;,&quot;\\mathslbb{U}&quot;:&quot;\uD580&quot;,&quot;\\mathslbb{V}&quot;:&quot;\uD581&quot;,&quot;\\mathslbb{W}&quot;:&quot;\uD582&quot;,&quot;\\mathslbb{X}&quot;:&quot;\uD583&quot;,&quot;\\mathslbb{Y}&quot;:&quot;\uD584&quot;,&quot;\\mathslbb{Z}&quot;:&quot;\uD585&quot;,&quot;\\mathslbb{a}&quot;:&quot;\uD586&quot;,&quot;\\mathslbb{b}&quot;:&quot;\uD587&quot;,&quot;\\mathslbb{c}&quot;:&quot;\uD588&quot;,&quot;\\mathslbb{d}&quot;:&quot;\uD589&quot;,&quot;\\mathslbb{e}&quot;:&quot;\uD58A&quot;,&quot;\\mathslbb{f}&quot;:&quot;\uD58B&quot;,&quot;\\mathslbb{g}&quot;:&quot;\uD58C&quot;,&quot;\\mathslbb{h}&quot;:&quot;\uD58D&quot;,&quot;\\mathslbb{i}&quot;:&quot;\uD58E&quot;,&quot;\\mathslbb{j}&quot;:&quot;\uD58F&quot;,&quot;\\mathslbb{k}&quot;:&quot;\uD590&quot;,&quot;\\mathslbb{l}&quot;:&quot;\uD591&quot;,&quot;\\mathslbb{m}&quot;:&quot;\uD592&quot;,&quot;\\mathslbb{n}&quot;:&quot;\uD593&quot;,&quot;\\mathslbb{o}&quot;:&quot;\uD594&quot;,&quot;\\mathslbb{p}&quot;:&quot;\uD595&quot;,&quot;\\mathslbb{q}&quot;:&quot;\uD596&quot;,&quot;\\mathslbb{r}&quot;:&quot;\uD597&quot;,&quot;\\mathslbb{s}&quot;:&quot;\uD598&quot;,&quot;\\mathslbb{t}&quot;:&quot;\uD599&quot;,&quot;\\mathslbb{u}&quot;:&quot;\uD59A&quot;,&quot;\\mathslbb{v}&quot;:&quot;\uD59B&quot;,&quot;\\mathslbb{w}&quot;:&quot;\uD59C&quot;,&quot;\\mathslbb{x}&quot;:&quot;\uD59D&quot;,&quot;\\mathslbb{y}&quot;:&quot;\uD59E&quot;,&quot;\\mathslbb{z}&quot;:&quot;\uD59F&quot;,&quot;\\mathsf{A}&quot;:&quot;\uD5A0&quot;,&quot;\\mathsf{B}&quot;:&quot;\uD5A1&quot;,&quot;\\mathsf{C}&quot;:&quot;\uD5A2&quot;,&quot;\\mathsf{D}&quot;:&quot;\uD5A3&quot;,&quot;\\mathsf{E}&quot;:&quot;\uD5A4&quot;,&quot;\\mathsf{F}&quot;:&quot;\uD5A5&quot;,&quot;\\mathsf{G}&quot;:&quot;\uD5A6&quot;,&quot;\\mathsf{H}&quot;:&quot;\uD5A7&quot;,&quot;\\mathsf{I}&quot;:&quot;\uD5A8&quot;,&quot;\\mathsf{J}&quot;:&quot;\uD5A9&quot;,&quot;\\mathsf{K}&quot;:&quot;\uD5AA&quot;,&quot;\\mathsf{L}&quot;:&quot;\uD5AB&quot;,&quot;\\mathsf{M}&quot;:&quot;\uD5AC&quot;,&quot;\\mathsf{N}&quot;:&quot;\uD5AD&quot;,&quot;\\mathsf{O}&quot;:&quot;\uD5AE&quot;,&quot;\\mathsf{P}&quot;:&quot;\uD5AF&quot;,&quot;\\mathsf{Q}&quot;:&quot;\uD5B0&quot;,&quot;\\mathsf{R}&quot;:&quot;\uD5B1&quot;,&quot;\\mathsf{S}&quot;:&quot;\uD5B2&quot;,&quot;\\mathsf{T}&quot;:&quot;\uD5B3&quot;,&quot;\\mathsf{U}&quot;:&quot;\uD5B4&quot;,&quot;\\mathsf{V}&quot;:&quot;\uD5B5&quot;,&quot;\\mathsf{W}&quot;:&quot;\uD5B6&quot;,&quot;\\mathsf{X}&quot;:&quot;\uD5B7&quot;,&quot;\\mathsf{Y}&quot;:&quot;\uD5B8&quot;,&quot;\\mathsf{Z}&quot;:&quot;\uD5B9&quot;,&quot;\\mathsf{a}&quot;:&quot;\uD5BA&quot;,&quot;\\mathsf{b}&quot;:&quot;\uD5BB&quot;,&quot;\\mathsf{c}&quot;:&quot;\uD5BC&quot;,&quot;\\mathsf{d}&quot;:&quot;\uD5BD&quot;,&quot;\\mathsf{e}&quot;:&quot;\uD5BE&quot;,&quot;\\mathsf{f}&quot;:&quot;\uD5BF&quot;,&quot;\\mathsf{g}&quot;:&quot;\uD5C0&quot;,&quot;\\mathsf{h}&quot;:&quot;\uD5C1&quot;,&quot;\\mathsf{i}&quot;:&quot;\uD5C2&quot;,&quot;\\mathsf{j}&quot;:&quot;\uD5C3&quot;,&quot;\\mathsf{k}&quot;:&quot;\uD5C4&quot;,&quot;\\mathsf{l}&quot;:&quot;\uD5C5&quot;,&quot;\\mathsf{m}&quot;:&quot;\uD5C6&quot;,&quot;\\mathsf{n}&quot;:&quot;\uD5C7&quot;,&quot;\\mathsf{o}&quot;:&quot;\uD5C8&quot;,&quot;\\mathsf{p}&quot;:&quot;\uD5C9&quot;,&quot;\\mathsf{q}&quot;:&quot;\uD5CA&quot;,&quot;\\mathsf{r}&quot;:&quot;\uD5CB&quot;,&quot;\\mathsf{s}&quot;:&quot;\uD5CC&quot;,&quot;\\mathsf{t}&quot;:&quot;\uD5CD&quot;,&quot;\\mathsf{u}&quot;:&quot;\uD5CE&quot;,&quot;\\mathsf{v}&quot;:&quot;\uD5CF&quot;,&quot;\\mathsf{w}&quot;:&quot;\uD5D0&quot;,&quot;\\mathsf{x}&quot;:&quot;\uD5D1&quot;,&quot;\\mathsf{y}&quot;:&quot;\uD5D2&quot;,&quot;\\mathsf{z}&quot;:&quot;\uD5D3&quot;,&quot;\\mathsfbf{A}&quot;:&quot;\uD5D4&quot;,&quot;\\mathsfbf{B}&quot;:&quot;\uD5D5&quot;,&quot;\\mathsfbf{C}&quot;:&quot;\uD5D6&quot;,&quot;\\mathsfbf{D}&quot;:&quot;\uD5D7&quot;,&quot;\\mathsfbf{E}&quot;:&quot;\uD5D8&quot;,&quot;\\mathsfbf{F}&quot;:&quot;\uD5D9&quot;,&quot;\\mathsfbf{G}&quot;:&quot;\uD5DA&quot;,&quot;\\mathsfbf{H}&quot;:&quot;\uD5DB&quot;,&quot;\\mathsfbf{I}&quot;:&quot;\uD5DC&quot;,&quot;\\mathsfbf{J}&quot;:&quot;\uD5DD&quot;,&quot;\\mathsfbf{K}&quot;:&quot;\uD5DE&quot;,&quot;\\mathsfbf{L}&quot;:&quot;\uD5DF&quot;,&quot;\\mathsfbf{M}&quot;:&quot;\uD5E0&quot;,&quot;\\mathsfbf{N}&quot;:&quot;\uD5E1&quot;,&quot;\\mathsfbf{O}&quot;:&quot;\uD5E2&quot;,&quot;\\mathsfbf{P}&quot;:&quot;\uD5E3&quot;,&quot;\\mathsfbf{Q}&quot;:&quot;\uD5E4&quot;,&quot;\\mathsfbf{R}&quot;:&quot;\uD5E5&quot;,&quot;\\mathsfbf{S}&quot;:&quot;\uD5E6&quot;,&quot;\\mathsfbf{T}&quot;:&quot;\uD5E7&quot;,&quot;\\mathsfbf{U}&quot;:&quot;\uD5E8&quot;,&quot;\\mathsfbf{V}&quot;:&quot;\uD5E9&quot;,&quot;\\mathsfbf{W}&quot;:&quot;\uD5EA&quot;,&quot;\\mathsfbf{X}&quot;:&quot;\uD5EB&quot;,&quot;\\mathsfbf{Y}&quot;:&quot;\uD5EC&quot;,&quot;\\mathsfbf{Z}&quot;:&quot;\uD5ED&quot;,&quot;\\mathsfbf{a}&quot;:&quot;\uD5EE&quot;,&quot;\\mathsfbf{b}&quot;:&quot;\uD5EF&quot;,&quot;\\mathsfbf{c}&quot;:&quot;\uD5F0&quot;,&quot;\\mathsfbf{d}&quot;:&quot;\uD5F1&quot;,&quot;\\mathsfbf{e}&quot;:&quot;\uD5F2&quot;,&quot;\\mathsfbf{f}&quot;:&quot;\uD5F3&quot;,&quot;\\mathsfbf{g}&quot;:&quot;\uD5F4&quot;,&quot;\\mathsfbf{h}&quot;:&quot;\uD5F5&quot;,&quot;\\mathsfbf{i}&quot;:&quot;\uD5F6&quot;,&quot;\\mathsfbf{j}&quot;:&quot;\uD5F7&quot;,&quot;\\mathsfbf{k}&quot;:&quot;\uD5F8&quot;,&quot;\\mathsfbf{l}&quot;:&quot;\uD5F9&quot;,&quot;\\mathsfbf{m}&quot;:&quot;\uD5FA&quot;,&quot;\\mathsfbf{n}&quot;:&quot;\uD5FB&quot;,&quot;\\mathsfbf{o}&quot;:&quot;\uD5FC&quot;,&quot;\\mathsfbf{p}&quot;:&quot;\uD5FD&quot;,&quot;\\mathsfbf{q}&quot;:&quot;\uD5FE&quot;,&quot;\\mathsfbf{r}&quot;:&quot;\uD5FF&quot;,&quot;\\mathsfbf{s}&quot;:&quot;\uD600&quot;,&quot;\\mathsfbf{t}&quot;:&quot;\uD601&quot;,&quot;\\mathsfbf{u}&quot;:&quot;\uD602&quot;,&quot;\\mathsfbf{v}&quot;:&quot;\uD603&quot;,&quot;\\mathsfbf{w}&quot;:&quot;\uD604&quot;,&quot;\\mathsfbf{x}&quot;:&quot;\uD605&quot;,&quot;\\mathsfbf{y}&quot;:&quot;\uD606&quot;,&quot;\\mathsfbf{z}&quot;:&quot;\uD607&quot;,&quot;\\mathsfsl{A}&quot;:&quot;\uD608&quot;,&quot;\\mathsfsl{B}&quot;:&quot;\uD609&quot;,&quot;\\mathsfsl{C}&quot;:&quot;\uD60A&quot;,&quot;\\mathsfsl{D}&quot;:&quot;\uD60B&quot;,&quot;\\mathsfsl{E}&quot;:&quot;\uD60C&quot;,&quot;\\mathsfsl{F}&quot;:&quot;\uD60D&quot;,&quot;\\mathsfsl{G}&quot;:&quot;\uD60E&quot;,&quot;\\mathsfsl{H}&quot;:&quot;\uD60F&quot;,&quot;\\mathsfsl{I}&quot;:&quot;\uD610&quot;,&quot;\\mathsfsl{J}&quot;:&quot;\uD611&quot;,&quot;\\mathsfsl{K}&quot;:&quot;\uD612&quot;,&quot;\\mathsfsl{L}&quot;:&quot;\uD613&quot;,&quot;\\mathsfsl{M}&quot;:&quot;\uD614&quot;,&quot;\\mathsfsl{N}&quot;:&quot;\uD615&quot;,&quot;\\mathsfsl{O}&quot;:&quot;\uD616&quot;,&quot;\\mathsfsl{P}&quot;:&quot;\uD617&quot;,&quot;\\mathsfsl{Q}&quot;:&quot;\uD618&quot;,&quot;\\mathsfsl{R}&quot;:&quot;\uD619&quot;,&quot;\\mathsfsl{S}&quot;:&quot;\uD61A&quot;,&quot;\\mathsfsl{T}&quot;:&quot;\uD61B&quot;,&quot;\\mathsfsl{U}&quot;:&quot;\uD61C&quot;,&quot;\\mathsfsl{V}&quot;:&quot;\uD61D&quot;,&quot;\\mathsfsl{W}&quot;:&quot;\uD61E&quot;,&quot;\\mathsfsl{X}&quot;:&quot;\uD61F&quot;,&quot;\\mathsfsl{Y}&quot;:&quot;\uD620&quot;,&quot;\\mathsfsl{Z}&quot;:&quot;\uD621&quot;,&quot;\\mathsfsl{a}&quot;:&quot;\uD622&quot;,&quot;\\mathsfsl{b}&quot;:&quot;\uD623&quot;,&quot;\\mathsfsl{c}&quot;:&quot;\uD624&quot;,&quot;\\mathsfsl{d}&quot;:&quot;\uD625&quot;,&quot;\\mathsfsl{e}&quot;:&quot;\uD626&quot;,&quot;\\mathsfsl{f}&quot;:&quot;\uD627&quot;,&quot;\\mathsfsl{g}&quot;:&quot;\uD628&quot;,&quot;\\mathsfsl{h}&quot;:&quot;\uD629&quot;,&quot;\\mathsfsl{i}&quot;:&quot;\uD62A&quot;,&quot;\\mathsfsl{j}&quot;:&quot;\uD62B&quot;,&quot;\\mathsfsl{k}&quot;:&quot;\uD62C&quot;,&quot;\\mathsfsl{l}&quot;:&quot;\uD62D&quot;,&quot;\\mathsfsl{m}&quot;:&quot;\uD62E&quot;,&quot;\\mathsfsl{n}&quot;:&quot;\uD62F&quot;,&quot;\\mathsfsl{o}&quot;:&quot;\uD630&quot;,&quot;\\mathsfsl{p}&quot;:&quot;\uD631&quot;,&quot;\\mathsfsl{q}&quot;:&quot;\uD632&quot;,&quot;\\mathsfsl{r}&quot;:&quot;\uD633&quot;,&quot;\\mathsfsl{s}&quot;:&quot;\uD634&quot;,&quot;\\mathsfsl{t}&quot;:&quot;\uD635&quot;,&quot;\\mathsfsl{u}&quot;:&quot;\uD636&quot;,&quot;\\mathsfsl{v}&quot;:&quot;\uD637&quot;,&quot;\\mathsfsl{w}&quot;:&quot;\uD638&quot;,&quot;\\mathsfsl{x}&quot;:&quot;\uD639&quot;,&quot;\\mathsfsl{y}&quot;:&quot;\uD63A&quot;,&quot;\\mathsfsl{z}&quot;:&quot;\uD63B&quot;,&quot;\\mathsfbfsl{A}&quot;:&quot;\uD63C&quot;,&quot;\\mathsfbfsl{B}&quot;:&quot;\uD63D&quot;,&quot;\\mathsfbfsl{C}&quot;:&quot;\uD63E&quot;,&quot;\\mathsfbfsl{D}&quot;:&quot;\uD63F&quot;,&quot;\\mathsfbfsl{E}&quot;:&quot;\uD640&quot;,&quot;\\mathsfbfsl{F}&quot;:&quot;\uD641&quot;,&quot;\\mathsfbfsl{G}&quot;:&quot;\uD642&quot;,&quot;\\mathsfbfsl{H}&quot;:&quot;\uD643&quot;,&quot;\\mathsfbfsl{I}&quot;:&quot;\uD644&quot;,&quot;\\mathsfbfsl{J}&quot;:&quot;\uD645&quot;,&quot;\\mathsfbfsl{K}&quot;:&quot;\uD646&quot;,&quot;\\mathsfbfsl{L}&quot;:&quot;\uD647&quot;,&quot;\\mathsfbfsl{M}&quot;:&quot;\uD648&quot;,&quot;\\mathsfbfsl{N}&quot;:&quot;\uD649&quot;,&quot;\\mathsfbfsl{O}&quot;:&quot;\uD64A&quot;,&quot;\\mathsfbfsl{P}&quot;:&quot;\uD64B&quot;,&quot;\\mathsfbfsl{Q}&quot;:&quot;\uD64C&quot;,&quot;\\mathsfbfsl{R}&quot;:&quot;\uD64D&quot;,&quot;\\mathsfbfsl{S}&quot;:&quot;\uD64E&quot;,&quot;\\mathsfbfsl{T}&quot;:&quot;\uD64F&quot;,&quot;\\mathsfbfsl{U}&quot;:&quot;\uD650&quot;,&quot;\\mathsfbfsl{V}&quot;:&quot;\uD651&quot;,&quot;\\mathsfbfsl{W}&quot;:&quot;\uD652&quot;,&quot;\\mathsfbfsl{X}&quot;:&quot;\uD653&quot;,&quot;\\mathsfbfsl{Y}&quot;:&quot;\uD654&quot;,&quot;\\mathsfbfsl{Z}&quot;:&quot;\uD655&quot;,&quot;\\mathsfbfsl{a}&quot;:&quot;\uD656&quot;,&quot;\\mathsfbfsl{b}&quot;:&quot;\uD657&quot;,&quot;\\mathsfbfsl{c}&quot;:&quot;\uD658&quot;,&quot;\\mathsfbfsl{d}&quot;:&quot;\uD659&quot;,&quot;\\mathsfbfsl{e}&quot;:&quot;\uD65A&quot;,&quot;\\mathsfbfsl{f}&quot;:&quot;\uD65B&quot;,&quot;\\mathsfbfsl{g}&quot;:&quot;\uD65C&quot;,&quot;\\mathsfbfsl{h}&quot;:&quot;\uD65D&quot;,&quot;\\mathsfbfsl{i}&quot;:&quot;\uD65E&quot;,&quot;\\mathsfbfsl{j}&quot;:&quot;\uD65F&quot;,&quot;\\mathsfbfsl{k}&quot;:&quot;\uD660&quot;,&quot;\\mathsfbfsl{l}&quot;:&quot;\uD661&quot;,&quot;\\mathsfbfsl{m}&quot;:&quot;\uD662&quot;,&quot;\\mathsfbfsl{n}&quot;:&quot;\uD663&quot;,&quot;\\mathsfbfsl{o}&quot;:&quot;\uD664&quot;,&quot;\\mathsfbfsl{p}&quot;:&quot;\uD665&quot;,&quot;\\mathsfbfsl{q}&quot;:&quot;\uD666&quot;,&quot;\\mathsfbfsl{r}&quot;:&quot;\uD667&quot;,&quot;\\mathsfbfsl{s}&quot;:&quot;\uD668&quot;,&quot;\\mathsfbfsl{t}&quot;:&quot;\uD669&quot;,&quot;\\mathsfbfsl{u}&quot;:&quot;\uD66A&quot;,&quot;\\mathsfbfsl{v}&quot;:&quot;\uD66B&quot;,&quot;\\mathsfbfsl{w}&quot;:&quot;\uD66C&quot;,&quot;\\mathsfbfsl{x}&quot;:&quot;\uD66D&quot;,&quot;\\mathsfbfsl{y}&quot;:&quot;\uD66E&quot;,&quot;\\mathsfbfsl{z}&quot;:&quot;\uD66F&quot;,&quot;\\mathtt{A}&quot;:&quot;\uD670&quot;,&quot;\\mathtt{B}&quot;:&quot;\uD671&quot;,&quot;\\mathtt{C}&quot;:&quot;\uD672&quot;,&quot;\\mathtt{D}&quot;:&quot;\uD673&quot;,&quot;\\mathtt{E}&quot;:&quot;\uD674&quot;,&quot;\\mathtt{F}&quot;:&quot;\uD675&quot;,&quot;\\mathtt{G}&quot;:&quot;\uD676&quot;,&quot;\\mathtt{H}&quot;:&quot;\uD677&quot;,&quot;\\mathtt{I}&quot;:&quot;\uD678&quot;,&quot;\\mathtt{J}&quot;:&quot;\uD679&quot;,&quot;\\mathtt{K}&quot;:&quot;\uD67A&quot;,&quot;\\mathtt{L}&quot;:&quot;\uD67B&quot;,&quot;\\mathtt{M}&quot;:&quot;\uD67C&quot;,&quot;\\mathtt{N}&quot;:&quot;\uD67D&quot;,&quot;\\mathtt{O}&quot;:&quot;\uD67E&quot;,&quot;\\mathtt{P}&quot;:&quot;\uD67F&quot;,&quot;\\mathtt{Q}&quot;:&quot;\uD680&quot;,&quot;\\mathtt{R}&quot;:&quot;\uD681&quot;,&quot;\\mathtt{S}&quot;:&quot;\uD682&quot;,&quot;\\mathtt{T}&quot;:&quot;\uD683&quot;,&quot;\\mathtt{U}&quot;:&quot;\uD684&quot;,&quot;\\mathtt{V}&quot;:&quot;\uD685&quot;,&quot;\\mathtt{W}&quot;:&quot;\uD686&quot;,&quot;\\mathtt{X}&quot;:&quot;\uD687&quot;,&quot;\\mathtt{Y}&quot;:&quot;\uD688&quot;,&quot;\\mathtt{Z}&quot;:&quot;\uD689&quot;,&quot;\\mathtt{a}&quot;:&quot;\uD68A&quot;,&quot;\\mathtt{b}&quot;:&quot;\uD68B&quot;,&quot;\\mathtt{c}&quot;:&quot;\uD68C&quot;,&quot;\\mathtt{d}&quot;:&quot;\uD68D&quot;,&quot;\\mathtt{e}&quot;:&quot;\uD68E&quot;,&quot;\\mathtt{f}&quot;:&quot;\uD68F&quot;,&quot;\\mathtt{g}&quot;:&quot;\uD690&quot;,&quot;\\mathtt{h}&quot;:&quot;\uD691&quot;,&quot;\\mathtt{i}&quot;:&quot;\uD692&quot;,&quot;\\mathtt{j}&quot;:&quot;\uD693&quot;,&quot;\\mathtt{k}&quot;:&quot;\uD694&quot;,&quot;\\mathtt{l}&quot;:&quot;\uD695&quot;,&quot;\\mathtt{m}&quot;:&quot;\uD696&quot;,&quot;\\mathtt{n}&quot;:&quot;\uD697&quot;,&quot;\\mathtt{o}&quot;:&quot;\uD698&quot;,&quot;\\mathtt{p}&quot;:&quot;\uD699&quot;,&quot;\\mathtt{q}&quot;:&quot;\uD69A&quot;,&quot;\\mathtt{r}&quot;:&quot;\uD69B&quot;,&quot;\\mathtt{s}&quot;:&quot;\uD69C&quot;,&quot;\\mathtt{t}&quot;:&quot;\uD69D&quot;,&quot;\\mathtt{u}&quot;:&quot;\uD69E&quot;,&quot;\\mathtt{v}&quot;:&quot;\uD69F&quot;,&quot;\\mathtt{w}&quot;:&quot;\uD6A0&quot;,&quot;\\mathtt{x}&quot;:&quot;\uD6A1&quot;,&quot;\\mathtt{y}&quot;:&quot;\uD6A2&quot;,&quot;\\mathtt{z}&quot;:&quot;\uD6A3&quot;,&quot;\\mathbf{\\Alpha}&quot;:&quot;\uD6A8&quot;,&quot;\\mathbf{\\Beta}&quot;:&quot;\uD6A9&quot;,&quot;\\mathbf{\\Gamma}&quot;:&quot;\uD6AA&quot;,&quot;\\mathbf{\\Delta}&quot;:&quot;\uD6AB&quot;,&quot;\\mathbf{\\Epsilon}&quot;:&quot;\uD6AC&quot;,&quot;\\mathbf{\\Zeta}&quot;:&quot;\uD6AD&quot;,&quot;\\mathbf{\\Eta}&quot;:&quot;\uD6AE&quot;,&quot;\\mathbf{\\Theta}&quot;:&quot;\uD6AF&quot;,&quot;\\mathbf{\\Iota}&quot;:&quot;\uD6B0&quot;,&quot;\\mathbf{\\Kappa}&quot;:&quot;\uD6B1&quot;,&quot;\\mathbf{\\Lambda}&quot;:&quot;\uD6B2&quot;,&quot;\\mathbf{\\Xi}&quot;:&quot;\uD6B5&quot;,&quot;\\mathbf{\\Pi}&quot;:&quot;\uD6B7&quot;,&quot;\\mathbf{\\Rho}&quot;:&quot;\uD6B8&quot;,&quot;\\mathbf{\\vartheta}&quot;:&quot;\uD6B9&quot;,&quot;\\mathbf{\\Sigma}&quot;:&quot;\uD6BA&quot;,&quot;\\mathbf{\\Tau}&quot;:&quot;\uD6BB&quot;,&quot;\\mathbf{\\Upsilon}&quot;:&quot;\uD6BC&quot;,&quot;\\mathbf{\\Phi}&quot;:&quot;\uD6BD&quot;,&quot;\\mathbf{\\Chi}&quot;:&quot;\uD6BE&quot;,&quot;\\mathbf{\\Psi}&quot;:&quot;\uD6BF&quot;,&quot;\\mathbf{\\Omega}&quot;:&quot;\uD6C0&quot;,&quot;\\mathbf{\\nabla}&quot;:&quot;\uD6C1&quot;,&quot;\\mathbf{\\Alpha}&quot;:&quot;\uD6C2&quot;,&quot;\\mathbf{\\Beta}&quot;:&quot;\uD6C3&quot;,&quot;\\mathbf{\\Gamma}&quot;:&quot;\uD6C4&quot;,&quot;\\mathbf{\\Delta}&quot;:&quot;\uD6C5&quot;,&quot;\\mathbf{\\Epsilon}&quot;:&quot;\uD6C6&quot;,&quot;\\mathbf{\\Zeta}&quot;:&quot;\uD6C7&quot;,&quot;\\mathbf{\\Eta}&quot;:&quot;\uD6C8&quot;,&quot;\\mathbf{\\theta}&quot;:&quot;\uD6C9&quot;,&quot;\\mathbf{\\Iota}&quot;:&quot;\uD6CA&quot;,&quot;\\mathbf{\\Kappa}&quot;:&quot;\uD6CB&quot;,&quot;\\mathbf{\\Lambda}&quot;:&quot;\uD6CC&quot;,&quot;\\mathbf{\\Xi}&quot;:&quot;\uD6CF&quot;,&quot;\\mathbf{\\Pi}&quot;:&quot;\uD6D1&quot;,&quot;\\mathbf{\\Rho}&quot;:&quot;\uD6D2&quot;,&quot;\\mathbf{\\varsigma}&quot;:&quot;\uD6D3&quot;,&quot;\\mathbf{\\Sigma}&quot;:&quot;\uD6D4&quot;,&quot;\\mathbf{\\Tau}&quot;:&quot;\uD6D5&quot;,&quot;\\mathbf{\\Upsilon}&quot;:&quot;\uD6D6&quot;,&quot;\\mathbf{\\Phi}&quot;:&quot;\uD6D7&quot;,&quot;\\mathbf{\\Chi}&quot;:&quot;\uD6D8&quot;,&quot;\\mathbf{\\Psi}&quot;:&quot;\uD6D9&quot;,&quot;\\mathbf{\\Omega}&quot;:&quot;\uD6DA&quot;,&quot;\\partial&quot;:&quot;\uD6DB&quot;,&quot;\\in&quot;:&quot;\uD6DC&quot;,&quot;\\mathbf{\\vartheta}&quot;:&quot;\uD6DD&quot;,&quot;\\mathbf{\\varkappa}&quot;:&quot;\uD6DE&quot;,&quot;\\mathbf{\\phi}&quot;:&quot;\uD6DF&quot;,&quot;\\mathbf{\\varrho}&quot;:&quot;\uD6E0&quot;,&quot;\\mathbf{\\varpi}&quot;:&quot;\uD6E1&quot;,&quot;\\mathsl{\\Alpha}&quot;:&quot;\uD6E2&quot;,&quot;\\mathsl{\\Beta}&quot;:&quot;\uD6E3&quot;,&quot;\\mathsl{\\Gamma}&quot;:&quot;\uD6E4&quot;,&quot;\\mathsl{\\Delta}&quot;:&quot;\uD6E5&quot;,&quot;\\mathsl{\\Epsilon}&quot;:&quot;\uD6E6&quot;,&quot;\\mathsl{\\Zeta}&quot;:&quot;\uD6E7&quot;,&quot;\\mathsl{\\Eta}&quot;:&quot;\uD6E8&quot;,&quot;\\mathsl{\\Theta}&quot;:&quot;\uD6E9&quot;,&quot;\\mathsl{\\Iota}&quot;:&quot;\uD6EA&quot;,&quot;\\mathsl{\\Kappa}&quot;:&quot;\uD6EB&quot;,&quot;\\mathsl{\\Lambda}&quot;:&quot;\uD6EC&quot;,&quot;\\mathsl{\\Xi}&quot;:&quot;\uD6EF&quot;,&quot;\\mathsl{\\Pi}&quot;:&quot;\uD6F1&quot;,&quot;\\mathsl{\\Rho}&quot;:&quot;\uD6F2&quot;,&quot;\\mathsl{\\vartheta}&quot;:&quot;\uD6F3&quot;,&quot;\\mathsl{\\Sigma}&quot;:&quot;\uD6F4&quot;,&quot;\\mathsl{\\Tau}&quot;:&quot;\uD6F5&quot;,&quot;\\mathsl{\\Upsilon}&quot;:&quot;\uD6F6&quot;,&quot;\\mathsl{\\Phi}&quot;:&quot;\uD6F7&quot;,&quot;\\mathsl{\\Chi}&quot;:&quot;\uD6F8&quot;,&quot;\\mathsl{\\Psi}&quot;:&quot;\uD6F9&quot;,&quot;\\mathsl{\\Omega}&quot;:&quot;\uD6FA&quot;,&quot;\\mathsl{\\nabla}&quot;:&quot;\uD6FB&quot;,&quot;\\mathsl{\\Alpha}&quot;:&quot;\uD6FC&quot;,&quot;\\mathsl{\\Beta}&quot;:&quot;\uD6FD&quot;,&quot;\\mathsl{\\Gamma}&quot;:&quot;\uD6FE&quot;,&quot;\\mathsl{\\Delta}&quot;:&quot;\uD6FF&quot;,&quot;\\mathsl{\\Epsilon}&quot;:&quot;\uD700&quot;,&quot;\\mathsl{\\Zeta}&quot;:&quot;\uD701&quot;,&quot;\\mathsl{\\Eta}&quot;:&quot;\uD702&quot;,&quot;\\mathsl{\\Theta}&quot;:&quot;\uD703&quot;,&quot;\\mathsl{\\Iota}&quot;:&quot;\uD704&quot;,&quot;\\mathsl{\\Kappa}&quot;:&quot;\uD705&quot;,&quot;\\mathsl{\\Lambda}&quot;:&quot;\uD706&quot;,&quot;\\mathsl{\\Xi}&quot;:&quot;\uD709&quot;,&quot;\\mathsl{\\Pi}&quot;:&quot;\uD70B&quot;,&quot;\\mathsl{\\Rho}&quot;:&quot;\uD70C&quot;,&quot;\\mathsl{\\varsigma}&quot;:&quot;\uD70D&quot;,&quot;\\mathsl{\\Sigma}&quot;:&quot;\uD70E&quot;,&quot;\\mathsl{\\Tau}&quot;:&quot;\uD70F&quot;,&quot;\\mathsl{\\Upsilon}&quot;:&quot;\uD710&quot;,&quot;\\mathsl{\\Phi}&quot;:&quot;\uD711&quot;,&quot;\\mathsl{\\Chi}&quot;:&quot;\uD712&quot;,&quot;\\mathsl{\\Psi}&quot;:&quot;\uD713&quot;,&quot;\\mathsl{\\Omega}&quot;:&quot;\uD714&quot;,&quot;\\partial&quot;:&quot;\uD715&quot;,&quot;\\mathsl{\\vartheta}&quot;:&quot;\uD717&quot;,&quot;\\mathsl{\\varkappa}&quot;:&quot;\uD718&quot;,&quot;\\mathsl{\\phi}&quot;:&quot;\uD719&quot;,&quot;\\mathsl{\\varrho}&quot;:&quot;\uD71A&quot;,&quot;\\mathsl{\\varpi}&quot;:&quot;\uD71B&quot;,&quot;\\mathbit{\\Alpha}&quot;:&quot;\uD71C&quot;,&quot;\\mathbit{\\Beta}&quot;:&quot;\uD71D&quot;,&quot;\\mathbit{\\Gamma}&quot;:&quot;\uD71E&quot;,&quot;\\mathbit{\\Delta}&quot;:&quot;\uD71F&quot;,&quot;\\mathbit{\\Epsilon}&quot;:&quot;\uD720&quot;,&quot;\\mathbit{\\Zeta}&quot;:&quot;\uD721&quot;,&quot;\\mathbit{\\Eta}&quot;:&quot;\uD722&quot;,&quot;\\mathbit{\\Theta}&quot;:&quot;\uD723&quot;,&quot;\\mathbit{\\Iota}&quot;:&quot;\uD724&quot;,&quot;\\mathbit{\\Kappa}&quot;:&quot;\uD725&quot;,&quot;\\mathbit{\\Lambda}&quot;:&quot;\uD726&quot;,&quot;\\mathbit{\\Xi}&quot;:&quot;\uD729&quot;,&quot;\\mathbit{\\Pi}&quot;:&quot;\uD72B&quot;,&quot;\\mathbit{\\Rho}&quot;:&quot;\uD72C&quot;,&quot;\\mathbit{O}&quot;:&quot;\uD72D&quot;,&quot;\\mathbit{\\Sigma}&quot;:&quot;\uD72E&quot;,&quot;\\mathbit{\\Tau}&quot;:&quot;\uD72F&quot;,&quot;\\mathbit{\\Upsilon}&quot;:&quot;\uD730&quot;,&quot;\\mathbit{\\Phi}&quot;:&quot;\uD731&quot;,&quot;\\mathbit{\\Chi}&quot;:&quot;\uD732&quot;,&quot;\\mathbit{\\Psi}&quot;:&quot;\uD733&quot;,&quot;\\mathbit{\\Omega}&quot;:&quot;\uD734&quot;,&quot;\\mathbit{\\nabla}&quot;:&quot;\uD735&quot;,&quot;\\mathbit{\\Alpha}&quot;:&quot;\uD736&quot;,&quot;\\mathbit{\\Beta}&quot;:&quot;\uD737&quot;,&quot;\\mathbit{\\Gamma}&quot;:&quot;\uD738&quot;,&quot;\\mathbit{\\Delta}&quot;:&quot;\uD739&quot;,&quot;\\mathbit{\\Epsilon}&quot;:&quot;\uD73A&quot;,&quot;\\mathbit{\\Zeta}&quot;:&quot;\uD73B&quot;,&quot;\\mathbit{\\Eta}&quot;:&quot;\uD73C&quot;,&quot;\\mathbit{\\Theta}&quot;:&quot;\uD73D&quot;,&quot;\\mathbit{\\Iota}&quot;:&quot;\uD73E&quot;,&quot;\\mathbit{\\Kappa}&quot;:&quot;\uD73F&quot;,&quot;\\mathbit{\\Lambda}&quot;:&quot;\uD740&quot;,&quot;\\mathbit{\\Xi}&quot;:&quot;\uD743&quot;,&quot;\\mathbit{\\Pi}&quot;:&quot;\uD745&quot;,&quot;\\mathbit{\\Rho}&quot;:&quot;\uD746&quot;,&quot;\\mathbit{\\varsigma}&quot;:&quot;\uD747&quot;,&quot;\\mathbit{\\Sigma}&quot;:&quot;\uD748&quot;,&quot;\\mathbit{\\Tau}&quot;:&quot;\uD749&quot;,&quot;\\mathbit{\\Upsilon}&quot;:&quot;\uD74A&quot;,&quot;\\mathbit{\\Phi}&quot;:&quot;\uD74B&quot;,&quot;\\mathbit{\\Chi}&quot;:&quot;\uD74C&quot;,&quot;\\mathbit{\\Psi}&quot;:&quot;\uD74D&quot;,&quot;\\mathbit{\\Omega}&quot;:&quot;\uD74E&quot;,&quot;\\partial&quot;:&quot;\uD74F&quot;,&quot;\\mathbit{\\vartheta}&quot;:&quot;\uD751&quot;,&quot;\\mathbit{\\varkappa}&quot;:&quot;\uD752&quot;,&quot;\\mathbit{\\phi}&quot;:&quot;\uD753&quot;,&quot;\\mathbit{\\varrho}&quot;:&quot;\uD754&quot;,&quot;\\mathbit{\\varpi}&quot;:&quot;\uD755&quot;,&quot;\\mathsfbf{\\Alpha}&quot;:&quot;\uD756&quot;,&quot;\\mathsfbf{\\Beta}&quot;:&quot;\uD757&quot;,&quot;\\mathsfbf{\\Gamma}&quot;:&quot;\uD758&quot;,&quot;\\mathsfbf{\\Delta}&quot;:&quot;\uD759&quot;,&quot;\\mathsfbf{\\Epsilon}&quot;:&quot;\uD75A&quot;,&quot;\\mathsfbf{\\Zeta}&quot;:&quot;\uD75B&quot;,&quot;\\mathsfbf{\\Eta}&quot;:&quot;\uD75C&quot;,&quot;\\mathsfbf{\\Theta}&quot;:&quot;\uD75D&quot;,&quot;\\mathsfbf{\\Iota}&quot;:&quot;\uD75E&quot;,&quot;\\mathsfbf{\\Kappa}&quot;:&quot;\uD75F&quot;,&quot;\\mathsfbf{\\Lambda}&quot;:&quot;\uD760&quot;,&quot;\\mathsfbf{\\Xi}&quot;:&quot;\uD763&quot;,&quot;\\mathsfbf{\\Pi}&quot;:&quot;\uD765&quot;,&quot;\\mathsfbf{\\Rho}&quot;:&quot;\uD766&quot;,&quot;\\mathsfbf{\\vartheta}&quot;:&quot;\uD767&quot;,&quot;\\mathsfbf{\\Sigma}&quot;:&quot;\uD768&quot;,&quot;\\mathsfbf{\\Tau}&quot;:&quot;\uD769&quot;,&quot;\\mathsfbf{\\Upsilon}&quot;:&quot;\uD76A&quot;,&quot;\\mathsfbf{\\Phi}&quot;:&quot;\uD76B&quot;,&quot;\\mathsfbf{\\Chi}&quot;:&quot;\uD76C&quot;,&quot;\\mathsfbf{\\Psi}&quot;:&quot;\uD76D&quot;,&quot;\\mathsfbf{\\Omega}&quot;:&quot;\uD76E&quot;,&quot;\\mathsfbf{\\nabla}&quot;:&quot;\uD76F&quot;,&quot;\\mathsfbf{\\Alpha}&quot;:&quot;\uD770&quot;,&quot;\\mathsfbf{\\Beta}&quot;:&quot;\uD771&quot;,&quot;\\mathsfbf{\\Gamma}&quot;:&quot;\uD772&quot;,&quot;\\mathsfbf{\\Delta}&quot;:&quot;\uD773&quot;,&quot;\\mathsfbf{\\Epsilon}&quot;:&quot;\uD774&quot;,&quot;\\mathsfbf{\\Zeta}&quot;:&quot;\uD775&quot;,&quot;\\mathsfbf{\\Eta}&quot;:&quot;\uD776&quot;,&quot;\\mathsfbf{\\Theta}&quot;:&quot;\uD777&quot;,&quot;\\mathsfbf{\\Iota}&quot;:&quot;\uD778&quot;,&quot;\\mathsfbf{\\Kappa}&quot;:&quot;\uD779&quot;,&quot;\\mathsfbf{\\Lambda}&quot;:&quot;\uD77A&quot;,&quot;\\mathsfbf{\\Xi}&quot;:&quot;\uD77D&quot;,&quot;\\mathsfbf{\\Pi}&quot;:&quot;\uD77F&quot;,&quot;\\mathsfbf{\\Rho}&quot;:&quot;\uD780&quot;,&quot;\\mathsfbf{\\varsigma}&quot;:&quot;\uD781&quot;,&quot;\\mathsfbf{\\Sigma}&quot;:&quot;\uD782&quot;,&quot;\\mathsfbf{\\Tau}&quot;:&quot;\uD783&quot;,&quot;\\mathsfbf{\\Upsilon}&quot;:&quot;\uD784&quot;,&quot;\\mathsfbf{\\Phi}&quot;:&quot;\uD785&quot;,&quot;\\mathsfbf{\\Chi}&quot;:&quot;\uD786&quot;,&quot;\\mathsfbf{\\Psi}&quot;:&quot;\uD787&quot;,&quot;\\mathsfbf{\\Omega}&quot;:&quot;\uD788&quot;,&quot;\\partial&quot;:&quot;\uD789&quot;,&quot;\\mathsfbf{\\vartheta}&quot;:&quot;\uD78B&quot;,&quot;\\mathsfbf{\\varkappa}&quot;:&quot;\uD78C&quot;,&quot;\\mathsfbf{\\phi}&quot;:&quot;\uD78D&quot;,&quot;\\mathsfbf{\\varrho}&quot;:&quot;\uD78E&quot;,&quot;\\mathsfbf{\\varpi}&quot;:&quot;\uD78F&quot;,&quot;\\mathsfbfsl{\\Alpha}&quot;:&quot;\uD790&quot;,&quot;\\mathsfbfsl{\\Beta}&quot;:&quot;\uD791&quot;,&quot;\\mathsfbfsl{\\Gamma}&quot;:&quot;\uD792&quot;,&quot;\\mathsfbfsl{\\Delta}&quot;:&quot;\uD793&quot;,&quot;\\mathsfbfsl{\\Epsilon}&quot;:&quot;\uD794&quot;,&quot;\\mathsfbfsl{\\Zeta}&quot;:&quot;\uD795&quot;,&quot;\\mathsfbfsl{\\Eta}&quot;:&quot;\uD796&quot;,&quot;\\mathsfbfsl{\\vartheta}&quot;:&quot;\uD797&quot;,&quot;\\mathsfbfsl{\\Iota}&quot;:&quot;\uD798&quot;,&quot;\\mathsfbfsl{\\Kappa}&quot;:&quot;\uD799&quot;,&quot;\\mathsfbfsl{\\Lambda}&quot;:&quot;\uD79A&quot;,&quot;\\mathsfbfsl{\\Xi}&quot;:&quot;\uD79D&quot;,&quot;\\mathsfbfsl{\\Pi}&quot;:&quot;\uD79F&quot;,&quot;\\mathsfbfsl{\\Rho}&quot;:&quot;\uD7A0&quot;,&quot;\\mathsfbfsl{\\vartheta}&quot;:&quot;\uD7A1&quot;,&quot;\\mathsfbfsl{\\Sigma}&quot;:&quot;\uD7A2&quot;,&quot;\\mathsfbfsl{\\Tau}&quot;:&quot;\uD7A3&quot;,&quot;\\mathsfbfsl{\\Upsilon}&quot;:&quot;\uD7A4&quot;,&quot;\\mathsfbfsl{\\Phi}&quot;:&quot;\uD7A5&quot;,&quot;\\mathsfbfsl{\\Chi}&quot;:&quot;\uD7A6&quot;,&quot;\\mathsfbfsl{\\Psi}&quot;:&quot;\uD7A7&quot;,&quot;\\mathsfbfsl{\\Omega}&quot;:&quot;\uD7A8&quot;,&quot;\\mathsfbfsl{\\nabla}&quot;:&quot;\uD7A9&quot;,&quot;\\mathsfbfsl{\\Alpha}&quot;:&quot;\uD7AA&quot;,&quot;\\mathsfbfsl{\\Beta}&quot;:&quot;\uD7AB&quot;,&quot;\\mathsfbfsl{\\Gamma}&quot;:&quot;\uD7AC&quot;,&quot;\\mathsfbfsl{\\Delta}&quot;:&quot;\uD7AD&quot;,&quot;\\mathsfbfsl{\\Epsilon}&quot;:&quot;\uD7AE&quot;,&quot;\\mathsfbfsl{\\Zeta}&quot;:&quot;\uD7AF&quot;,&quot;\\mathsfbfsl{\\Eta}&quot;:&quot;\uD7B0&quot;,&quot;\\mathsfbfsl{\\vartheta}&quot;:&quot;\uD7B1&quot;,&quot;\\mathsfbfsl{\\Iota}&quot;:&quot;\uD7B2&quot;,&quot;\\mathsfbfsl{\\Kappa}&quot;:&quot;\uD7B3&quot;,&quot;\\mathsfbfsl{\\Lambda}&quot;:&quot;\uD7B4&quot;,&quot;\\mathsfbfsl{\\Xi}&quot;:&quot;\uD7B7&quot;,&quot;\\mathsfbfsl{\\Pi}&quot;:&quot;\uD7B9&quot;,&quot;\\mathsfbfsl{\\Rho}&quot;:&quot;\uD7BA&quot;,&quot;\\mathsfbfsl{\\varsigma}&quot;:&quot;\uD7BB&quot;,&quot;\\mathsfbfsl{\\Sigma}&quot;:&quot;\uD7BC&quot;,&quot;\\mathsfbfsl{\\Tau}&quot;:&quot;\uD7BD&quot;,&quot;\\mathsfbfsl{\\Upsilon}&quot;:&quot;\uD7BE&quot;,&quot;\\mathsfbfsl{\\Phi}&quot;:&quot;\uD7BF&quot;,&quot;\\mathsfbfsl{\\Chi}&quot;:&quot;\uD7C0&quot;,&quot;\\mathsfbfsl{\\Psi}&quot;:&quot;\uD7C1&quot;,&quot;\\mathsfbfsl{\\Omega}&quot;:&quot;\uD7C2&quot;,&quot;\\partial&quot;:&quot;\uD7C3&quot;,&quot;\\mathsfbfsl{\\vartheta}&quot;:&quot;\uD7C5&quot;,&quot;\\mathsfbfsl{\\varkappa}&quot;:&quot;\uD7C6&quot;,&quot;\\mathsfbfsl{\\phi}&quot;:&quot;\uD7C7&quot;,&quot;\\mathsfbfsl{\\varrho}&quot;:&quot;\uD7C8&quot;,&quot;\\mathsfbfsl{\\varpi}&quot;:&quot;\uD7C9&quot;,&quot;\\mathbf{0}&quot;:&quot;\uD7CE&quot;,&quot;\\mathbf{1}&quot;:&quot;\uD7CF&quot;,&quot;\\mathbf{2}&quot;:&quot;\uD7D0&quot;,&quot;\\mathbf{3}&quot;:&quot;\uD7D1&quot;,&quot;\\mathbf{4}&quot;:&quot;\uD7D2&quot;,&quot;\\mathbf{5}&quot;:&quot;\uD7D3&quot;,&quot;\\mathbf{6}&quot;:&quot;\uD7D4&quot;,&quot;\\mathbf{7}&quot;:&quot;\uD7D5&quot;,&quot;\\mathbf{8}&quot;:&quot;\uD7D6&quot;,&quot;\\mathbf{9}&quot;:&quot;\uD7D7&quot;,&quot;\\mathbb{0}&quot;:&quot;\uD7D8&quot;,&quot;\\mathbb{1}&quot;:&quot;\uD7D9&quot;,&quot;\\mathbb{2}&quot;:&quot;\uD7DA&quot;,&quot;\\mathbb{3}&quot;:&quot;\uD7DB&quot;,&quot;\\mathbb{4}&quot;:&quot;\uD7DC&quot;,&quot;\\mathbb{5}&quot;:&quot;\uD7DD&quot;,&quot;\\mathbb{6}&quot;:&quot;\uD7DE&quot;,&quot;\\mathbb{7}&quot;:&quot;\uD7DF&quot;,&quot;\\mathbb{8}&quot;:&quot;\uD7E0&quot;,&quot;\\mathbb{9}&quot;:&quot;\uD7E1&quot;,&quot;\\mathsf{0}&quot;:&quot;\uD7E2&quot;,&quot;\\mathsf{1}&quot;:&quot;\uD7E3&quot;,&quot;\\mathsf{2}&quot;:&quot;\uD7E4&quot;,&quot;\\mathsf{3}&quot;:&quot;\uD7E5&quot;,&quot;\\mathsf{4}&quot;:&quot;\uD7E6&quot;,&quot;\\mathsf{5}&quot;:&quot;\uD7E7&quot;,&quot;\\mathsf{6}&quot;:&quot;\uD7E8&quot;,&quot;\\mathsf{7}&quot;:&quot;\uD7E9&quot;,&quot;\\mathsf{8}&quot;:&quot;\uD7EA&quot;,&quot;\\mathsf{9}&quot;:&quot;\uD7EB&quot;,&quot;\\mathsfbf{0}&quot;:&quot;\uD7EC&quot;,&quot;\\mathsfbf{1}&quot;:&quot;\uD7ED&quot;,&quot;\\mathsfbf{2}&quot;:&quot;\uD7EE&quot;,&quot;\\mathsfbf{3}&quot;:&quot;\uD7EF&quot;,&quot;\\mathsfbf{4}&quot;:&quot;\uD7F0&quot;,&quot;\\mathsfbf{5}&quot;:&quot;\uD7F1&quot;,&quot;\\mathsfbf{6}&quot;:&quot;\uD7F2&quot;,&quot;\\mathsfbf{7}&quot;:&quot;\uD7F3&quot;,&quot;\\mathsfbf{8}&quot;:&quot;\uD7F4&quot;,&quot;\\mathsfbf{9}&quot;:&quot;\uD7F5&quot;,&quot;\\mathtt{0}&quot;:&quot;\uD7F6&quot;,&quot;\\mathtt{1}&quot;:&quot;\uD7F7&quot;,&quot;\\mathtt{2}&quot;:&quot;\uD7F8&quot;,&quot;\\mathtt{3}&quot;:&quot;\uD7F9&quot;,&quot;\\mathtt{4}&quot;:&quot;\uD7FA&quot;,&quot;\\mathtt{5}&quot;:&quot;\uD7FB&quot;,&quot;\\mathtt{6}&quot;:&quot;\uD7FC&quot;,&quot;\\mathtt{7}&quot;:&quot;\uD7FD&quot;,&quot;\\mathtt{8}&quot;:&quot;\uD7FE&quot;,&quot;\\mathtt{9}&quot;:&quot;\uD7FF&quot;,&quot;{\\o}&quot;:&quot;\u00D8&quot;,&quot;{\AA}&quot;:&quot;\u212B&quot;};</td>
      </tr>
</table>

  <div class="BlobToolbar position-absolute js-file-line-actions dropdown js-menu-container js-select-menu d-none" aria-hidden="true">
    <button class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1 dropdown-toggle js-menu-target" id="js-file-line-action-button" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Inline file action toolbar" aria-controls="inline-file-actions">
      <svg aria-hidden="true" class="octicon octicon-kebab-horizontal" height="16" version="1.1" viewBox="0 0 13 16" width="13"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
    </button>
    <div class="dropdown-menu-content js-menu-content" id="inline-file-actions">
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><a class="js-zeroclipboard dropdown-item" style="cursor:pointer;" id="js-copy-lines" data-original-text="Copy lines">Copy lines</a></li>
        <li><a class="js-zeroclipboard dropdown-item" id= "js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</a></li>
        <li><a href="/pcooksey/bibtex-js/blame/237827702ea39190c5094df2d8866b2c46748f37/src/bibtex_js.js" class="dropdown-item js-update-url-with-hash" id="js-view-git-blame">View git blame</a></li>
          <li><a href="/pcooksey/bibtex-js/issues/new" class="dropdown-item" id="js-new-issue">Open new issue</a></li>
      </ul>
    </div>
  </div>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between py-6 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.22377s from unicorn-713204371-pf3b1">GitHub</span>, Inc.</li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-terms-of-service/" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li class="mr-3"><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-security/" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>

    <a href="https://github.com" aria-label="Homepage" class="footer-octicon" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-wCiQbNHIz6R9xWhc8kuUtzTjjK5i+8EIORxaoPuh//mQzLYF41CkYAfS7ohddvlSWJN2lcmF+i/4cX8i4FeqEg==" src="https://assets-cdn.github.com/assets/frameworks-c028906cd1c8.js" type="application/javascript"></script>
    
    <script async="async" crossorigin="anonymous" integrity="sha512-3oWePu0n+YNZ/3ck4Ox7B0DUgR/FSHzRJGd9lLJwfYyG2EXb1aKiS4O2PXR63lNXPO3EPkRTjkl5oe35Q6xZtA==" src="https://assets-cdn.github.com/assets/github-de859e3eed27.js" type="application/javascript"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>

  

  </body>
</html>

