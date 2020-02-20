from django.db import models
from wagtail.api import APIField
from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel
from wagtail.core import fields, blocks, models as wagtail_models
from wagtail_headless_preview.models import HeadlessPreviewMixin


class PreviewablePageBase(HeadlessPreviewMixin, wagtail_models.Page):
    class Meta:
        abstract = True


class HomePage(PreviewablePageBase):
    body = fields.RichTextField(blank=True)

    content_panels = wagtail_models.Page.content_panels + [
        FieldPanel('body', classname="full"),
    ]

    api_fields = [
        APIField('body')
    ]

class BlogPageAuthor(wagtail_models.Orderable):
    page = models.ForeignKey('home.BlogPage', on_delete=models.CASCADE, related_name='authors')
    name = models.CharField(max_length=255)

    api_fields = [
        APIField('name'),
    ]


class BlogPage(PreviewablePageBase):
    published_date = models.DateTimeField(auto_now=True)
    # body = fields.RichTextField()
    body = fields.StreamField([
        ('heading', blocks.CharBlock(classname="test-class__name")),
        ('paragraph', blocks.RichTextBlock()),
    ])

    content_panels = wagtail_models.Page.content_panels + [
        StreamFieldPanel('body'),
    ]

    # Export fields over the API
    api_fields = [
        APIField('published_date'),
        APIField('body'),
        APIField('authors'),  # This will nest the relevant BlogPageAuthor objects in the API response
    ]
