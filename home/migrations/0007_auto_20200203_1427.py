# Generated by Django 2.2.9 on 2020-02-03 14:27

from django.db import migrations
import wagtail.core.blocks
import wagtail.core.fields


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_auto_20200130_1534'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpage',
            name='body',
            field=wagtail.core.fields.StreamField([('heading', wagtail.core.blocks.CharBlock(classname='test-class__name')), ('paragraph', wagtail.core.blocks.RichTextBlock())]),
        ),
    ]